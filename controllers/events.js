const express = require('express');
const Usuario = require('../models/Usuario');
const { generarToken } = require('../helpers/jwt');
const Evento = require('../models/Evento');


const getEventos = async (req, res = express.response) => {

    console.log(req.body);
    try {
        const eventos = await Evento.find({ user: req.uid }).populate('user','name');
       return res.status(200).json({
            ok: true,
            eventos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al traer eventos'
        })
    }

}


const CreateEvento = async (req, res = express.response) => {

    console.log(req.body);
    try {
        const evento = new Evento(req.body);

        evento.user = req.uid;

        const response = await evento.save();
        return  res.status(201).json({
            ok: true,
            response
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error al Crear eventos'
        })
    }

}

const UpdateEvento = async (req, res = express.response) => {

    console.log(req.body);
    try {
        const eventoId = req.params.id;
        const uid = req.uid;

        const evento = await Evento.findById(eventoId);
        if(!evento) {
           return res.status(404).json({
                ok:false,
                msg:'El evento no existe'
            })
        }

        if(evento.user.toString() !== uid){
           return  res.status(401).json({
                ok:false,
                msg:'no puede editar este evento'
            })
        }

        const nuevoEvento = {
            ...req.body,
            user:uid
        }

        const eventoActualizado= await Evento.findByIdAndUpdate(eventoId, nuevoEvento,{new:true});

        return res.status(200).json({
            ok: true,
            eventoId: eventoId,
            evento:eventoActualizado
        });
    } catch (error) {
        console.log(error);
       return res.status(500).json({
            ok: false,
            msg: 'Error al Actualizar eventos'
        })
    }

}


const DeleteEvento = async (req, res = express.response) => {
    console.log(req.body);
    try {
        const eventoId = req.params.id;
        const uid = req.uid;

        const evento = await Evento.findById(eventoId);
        if(!evento) {
           return res.status(404).json({
                ok:false,
                msg:'El evento no existe'
            })
        }

        if(evento.user.toString() !== uid){
           return  res.status(401).json({
                ok:false,
                msg:'no puede eliminar este evento'
            })
        }
        await Evento.findByIdAndDelete(eventoId);
        return res.status(200).json({
            ok: true,            
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al Eliminar eventos'
        })
    }

}


module.exports = {
    getEventos,
    CreateEvento,
    UpdateEvento,
    DeleteEvento
}