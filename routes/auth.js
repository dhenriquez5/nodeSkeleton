const express = require('express');
const router = express.Router();
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos')
const { crearUsuario, Login, ReTokenizar, changePassword, sendEmail } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');
const { ExistEmail } = require('../middlewares/db-validators');


router.post('/new',
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('lastName', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('email').custom(ExistEmail),
        validarCampos
    ],
    crearUsuario)

router.post('/login',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        validarCampos
    ],
    Login)

router.get('/renew', validarJWT, ReTokenizar)

router.post('/changePassword',
    [
        check('email', 'El email es obligatorio').not().isEmail(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('token', 'El password es obligatorio').not().isEmpty(),
    ],
    changePassword)

router.post('/sendEmail',
    [
        check('email', 'El email es obligatorio').not().isEmail(),
    ],
    sendEmail)

module.exports = router;