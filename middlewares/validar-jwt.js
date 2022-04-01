const express = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = express.request, res = express.response, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        })
    }

    try {
        const payload = jwt.verify(
            token,
            process.env.secret_key,
        );
        req.uid = payload.uid;
        req.name = payload.name;

    } catch (error) {

        return res.status(401).json({
            ok: false,
            msg: 'Invalid token!'
        })
    }

    next();

}

module.exports = {
    validarJWT
}