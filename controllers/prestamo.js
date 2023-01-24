const express = require('express');
var mongoose = require('mongoose');
const Prestamo = require('../models/Prestamo');
var moment = require('moment');
const { addNuevoCapital_Interes, CalcularInteres } = require('../helpers/Operations');

const getPrestamo = async (req, res = express.response) => {
    try {
        const { termino } = req.params;
        const regex = new RegExp(termino, 'i');
        const prestamos = await Prestamo.find({
            $or: [{ cliente: regex, }],
            $and: [{ user: req.uid }]
        }).populate('user').populate('cliente');
        return res.status(200).json({
            ok: true,
            response: prestamos
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer prestamo'
        })
    }
};

const getPrestamoByCliente = async (req = express.request, res = express.response) => {
    try {
        const { termino } = req.params;
        let prestamos = await Prestamo.find({
            id_cliente: termino,
            $and: [{ user: req.uid }]
        }).populate('user').populate('cliente');

        prestamos = prestamos.map(addNuevoCapital_Interes)

        return res.status(200).json({
            ok: true,
            response: prestamos
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer prestamo'
        })
    }
};

const CreatePrestamo = async (req = express.request, res = express.response) => {
    try {
        const { body, uid } = req;
        const newPrestamo = new Prestamo(body);
        newPrestamo.user = uid;

        // const existePrestamo = await Prestamo.findOne({ id_cliente: body.id_cliente });
        // if (existePrestamo) {
        //     return res.status(400).json({
        //         ok: false,
        //         msg: 'Error este cliente ya tiene prestamo'
        //     })
        // }

        const response = await newPrestamo.save();
        return res.status(200).json({
            ok: true,
            response
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al crear prestamo'
        })
    }
};

const UpdatePrestamo = async (req = express.request, res = express.response) => {
    try {
        const id = req.params.id;
        const uid = req.uid;
        const prestamo = await Prestamo.findById(id);
        if (prestamo.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'no puede editar este prestamo'
            })
        }

        const nuevoPrestamo = {
            ...req.body,
            user: uid
        };

        const prestamoActualizado = await Prestamo.findByIdAndUpdate(id, nuevoPrestamo, { new: true });
        return res.status(200).json({
            ok: true,
            id: id,
            response: prestamoActualizado
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al actualizar prestamo'
        })
    }
};

const DeletePrestamo = async (req = express.request, res = express.response) => {
    try {
        const id = req.params.id;
        const uid = req.uid;
        const prestamo = await Prestamo.findById(id);

        if (prestamo.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'no puede eliminar este prestamo'
            })
        }

        await Prestamo.findByIdAndDelete(id);
        return res.status(200).json({
            ok: true
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al Eliminar prestamo'
        })
    }
};


const generatePago = async (req = express.request, res = express.response) => {
    try {
        const { body, uid } = req;
        console.log(body);
        let prestamo = await Prestamo.findById(body.prestamo_id);

        const nuevoPago = {
            valor_pago: body.valor_pagar,
            fecha_pago: moment(body.fecha_pago),
            valor_capital: (body.valor_pagar-body.valor_interes),
            valor_interes: body.valor_interes,
        };
        console.log(nuevoPago);
        prestamo.pagos.push(nuevoPago);

        const prestamoActualizado = await Prestamo.findByIdAndUpdate(body.prestamo_id, prestamo, { new: true });
        return res.status(200).json({
            ok: true,
            id: body.prestamo_id,
            response: prestamoActualizado
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al generar pago'
        })
    }
};

const reCalcularInteres =  async (req = express.request, res = express.response) => {
    try {
        const { body, uid } = req;
        let prestamo = await Prestamo.findOne({
            _id: body.prestamo_id,
            $and: [{ user: uid }]
        }).populate('user').populate('cliente');

        const valor_interes = CalcularInteres(prestamo,body.fecha_corte);

        return res.status(200).json({
            ok:true,
            response:valor_interes
        })
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al recalcular interes'
        })
    }

}

module.exports = {
    getPrestamo,
    CreatePrestamo,
    UpdatePrestamo,
    DeletePrestamo,
    getPrestamoByCliente,
    reCalcularInteres,
    generatePago
}