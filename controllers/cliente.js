const express = require('express');
const Cliente = require('../models/Cliente');
const { generarToken } = require('../helpers/jwt');


const getCliente = async (req, res = express.response) => {

    try {
        const termino = req.params.termino;
        const regex = new RegExp(termino, 'i')
        const clientes = await Cliente.find({
            $or: [{ nombre: regex, }, { apellido: regex }, { cedula: regex }],
            $and: [{ user: req.uid }]
        }).populate('user', 'name');
        return res.status(200).json({
            ok: true,
            response: clientes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer clientes'
        })
    }

}


const CreateCliente = async (req, res = express.response) => {

    const { body } = req;
    try {
        const cliente = new Cliente(req.body);
        cliente.user = req.uid;

        const existeCliente = await Cliente.findOne({
            $and: [
              { cedula: body.cedula },
              { user: req.uid }
            ]
          });
        if (existeCliente) {
            return res.status(400).json({
                ok: false,
                msg: 'Error este cliente ya existe'
            })
        }

        const response = await cliente.save();
        return res.status(200).json({
            ok: true,
            response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al Crear Clientes'
        })
    }

}

const UpdateCliente = async (req, res = express.response) => {

    try {
        const id = req.params.id;
        const uid = req.uid;

        const cliente = await Cliente.findById(id);

        if (cliente.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'no puede editar este cliente'
            })
        }

        const nuevoCliente = {
            ...req.body,
            user: uid
        }

        const clienteActualizado = await Cliente.findByIdAndUpdate(id, nuevoCliente, { new: true });

        return res.status(200).json({
            ok: true,
            id: id,
            response: clienteActualizado
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al Actualizar Cliente'
        })
    }

}


const DeleteCliente = async (req, res = express.response) => {
    try {
        const id = req.params.id;
        const uid = req.uid;

        const cliente = await Cliente.findById(id);

        if (cliente.user.toString() !== uid) {
            return res.status(401).json({
                ok: false,
                msg: 'no puede eliminar este cliente'
            })
        }
        await Cliente.findByIdAndDelete(id);
        return res.status(200).json({
            ok: true,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al Eliminar cliente'
        })
    }

}


module.exports = {
    getCliente,
    CreateCliente,
    UpdateCliente,
    DeleteCliente
}