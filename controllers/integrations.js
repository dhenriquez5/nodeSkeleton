const express = require("express");
var mongoose = require("mongoose");
const Prestamo = require("../models/Prestamo");
var moment = require("moment");
const {
    CalcularInteres,
    getFechaMayorPagos
} = require("../helpers/Operations");

const SendDailyNotification = async (
    req = express.request,
    res = express.response
) => {
    try {
        const today = moment();
        const oneMonthAgo = today.subtract(1, 'months');
        // Step 1: Fetch loans where "fecha_prestamo" matches the condition
        const dueLoans = await Prestamo.find({
            pagado: false,
            fecha_prestamo: {
                $gte: oneMonthAgo.startOf('day').toDate(),
                $lte: oneMonthAgo.endOf('day').toDate(),
            },
        });

        // Step 2: Include loans where the last payment date in "pagos" matches the condition
        const loansWithLastPaymentOneMonthAgo = await Prestamo.find({
            pagado: false,
            pagos: { $exists: true, $ne: [] }, // Ensure "pagos" is not empty
        }).then((loans) =>
            loans.filter((loan) => {
                const ultimoPago = getFechaMayorPagos(loan)

                const fechaNormalized = moment(ultimoPago).utc().startOf('day'); // Normalize fecha to UTC and start of the day
                const oneMonthAgoNormalized = moment(oneMonthAgo).startOf('day');

                return fechaNormalized.isSame(oneMonthAgoNormalized, 'day');
            })
        );

        // Step 3: Merge results, avoiding duplicates
        const allDueLoans = [...dueLoans, ...loansWithLastPaymentOneMonthAgo].reduce(
            (unique, loan) => {
                if (!unique.find((l) => l._id.toString() === loan._id.toString())) {
                    unique.push(loan);
                }
                return unique;
            },
            []
        );

        const prestamos = allDueLoans.map((p) => {
            return CalcularInteres(p, today);
        });

        const result = prestamos.map((loan) => {
            return {
                cliente: loan.cliente,
                fecha_prestamo: moment(loan.fecha_prestamo).format('YYYY-MM-DD'),
                valor_prestamo: loan.valor_prestamo,
                capital_actual: loan.capital_actual,
                tasa_interes: loan.tasa_interes,
            };
        });
        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: "Error al obtener clientes a cobrar hoy",
        });
    }
};

module.exports = {
    SendDailyNotification
};


