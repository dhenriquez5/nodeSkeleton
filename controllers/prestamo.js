const express = require('express');
var mongoose = require('mongoose');
const Prestamo = require('../models/Prestamo');
var moment = require('moment');
const {  CalcularInteres, getCobros, getFechaMayorPagos } = require('../helpers/Operations');


const getPrestamoActivo = async (req, res = express.response) => {
    try {
        let prestamos = await Prestamo.find({
            $and: [{ user: req.uid }, { pagado: false }]
        }).populate('user').populate('cliente');

        prestamos = prestamos.map( (p) => {
            return CalcularInteres(p,moment())
        });

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
}

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
            $and: [{ user: req.uid }, { pagado: false }]
        }).populate('user').populate('cliente');

        prestamos = prestamos.map( (p) => {
            return CalcularInteres(p,moment())
        });



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
        let prestamo = await Prestamo.findById(body.prestamo_id);

        if (body.checkFin) {
            prestamo.pagado = true;
        }

        const nuevoPago = {
            valor_pago: body.valor_pagar,
            fecha_pago: moment(body.fecha_pago),
            valor_capital: (body.valor_pagar - body.valor_interes),
            valor_interes: body.valor_interes,
        };
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

const reCalcularInteres = async (req = express.request, res = express.response) => {
    try {
        const { body, uid } = req;
        let prestamo = await Prestamo.findOne({
            _id: body.prestamo_id,
            $and: [{ user: uid }]
        }).populate('user').populate('cliente');

        const prestamo2 = CalcularInteres(prestamo, body.fecha_corte);
        

        return res.status(200).json({
            ok: true,
            response: prestamo2.valor_interes
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al recalcular interes'
        })
    }
}

const deletePago = async (req = express.request, res = express.response) => {
    try {
        const { body, uid } = req;

        let prestamo_updated =await Prestamo.findByIdAndUpdate({ _id: body.prestamo_id }, { $pull: { pagos: { _id: body.pago_id } } }, { new: true });
        prestamo_updated = CalcularInteres(prestamo_updated,moment());

        return res.status(200).json({
            ok: true,
            response: prestamo_updated
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al eliminar pago'
        })
    }
}

const getProximosCobrar = async (req = express.request, res = express.response) => {
    try {
        const { body, uid } = req;
        let prestamos = await Prestamo.find({
            $and: [{ user: req.uid }, { pagado: false }]
        }).populate('user').populate('id_cliente');//.sort({ fecha_prestamo:'asc'  })

        prestamos= prestamos.filter(prestamo=>{
            return getCobros(prestamo,moment(body.fecha_ini),moment(body.fecha_fin));
        })

        prestamos = prestamos.map( (p) => {
            return CalcularInteres(p,moment())
        });

        prestamos = prestamos.sort((a,b) => {
            const fecha1= getFechaMayorPagos(a);
            const fecha2= getFechaMayorPagos(b);
            return moment(fecha1)-moment(fecha2); 
        })

        return res.status(200).json({
            ok: true,
            response: prestamos
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al obtener proximos pagos'
        })
    }
};

module.exports = {
    getPrestamo,
    CreatePrestamo,
    UpdatePrestamo,
    DeletePrestamo,
    getPrestamoByCliente,
    reCalcularInteres,
    generatePago,
    deletePago,
    getPrestamoActivo,
    getProximosCobrar
}