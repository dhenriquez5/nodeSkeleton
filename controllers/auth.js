const express = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarToken } = require('../helpers/jwt');
const { sendingMails, makeCode } = require('../helpers/generateCode');
const Code = require('../models/Code');

const crearUsuario = async (req, res = express.response) => {

    const { name, email, password } = req.body
    try {
        let usuario = await Usuario.findOne({ email: email });
        console.log(usuario);
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'el correo ya existe'
            })
        }
        usuario = new Usuario(req.body)

        ///encript contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        await usuario.save();

        ///GenerarToken
        const token = await generarToken(usuario.id, usuario.name)
        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token: token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error en registro usuario'
        })
    }

}


const Login = async (req, res = express.response) => {
    const { email, password } = req.body
    try {

        const usuario = await Usuario.findOne({ email: email });

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña incorrecta'
            })
        }

        const validPass = bcrypt.compareSync(password, usuario.password);

        if (!validPass) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña incorrecta!'
            })
        }

        ////GenerarToken
        const token = await generarToken(usuario.id, usuario.name)
        res.json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
            token: token
        });
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error al logearse'
        })
    }

}



const ReTokenizar = async (req, res) => {

    const uid = req.uid;
    const name = req.name

    const token = await generarToken(uid,name)

    res.json({
        ok: true,
        token: token,
        uid, name
    });
}

const changePassword= async (req, res = express.response) => {
    const { email, password,token } = req.body;
    try {
        const salt = bcrypt.genSaltSync();
        const newPassword= bcrypt.hashSync(password, salt);

        let usuario = await Usuario.findOneAndUpdate({ email: email },{password: password},{new:true});

        return res.status(200).json({
            ok: true,
            msg:'La contraseña ha sido actualizada correctamente',
            usuario
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al cambiar el password'
        })
    }
}


const sendEmail= async (req, res = express.response) => {
    const { email } = req.body;
    try {
        let usuario = await Usuario.findOne({ email: email });
        if (!usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo no existe'
            })
        }
        
        let codeGenerator = new Code(req.body);
        const code =makeCode(4);
        codeGenerator.code = code;
        await codeGenerator.save();
        const isSent= sendingMails(usuario.email,usuario.name,usuario.lastName,code);
        if(!isSent){
            return res.status(400).json({
                ok: false,
                msg: 'No se envio el correo correctamente, intente nuevamente'
            })
        }


        return res.status(200).json({
            ok: true,
            msg:'Se ha enviado un correo que incluye un token que sera necesario para cambiar la contraseña',
        })

    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al cambiar el password'
        })
    }
}




module.exports = {
    Login,
    ReTokenizar,
    crearUsuario, 
    changePassword,
    sendEmail
}

