const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { DeleteCliente, UpdateCliente, CreateCliente, getCliente } = require('../controllers/cliente');
const { isDate } = require('../helpers/isDate');
const { ExisteCliente } = require('../helpers/validaciones-db');
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');

router.use(validarJWT)


router.get('/getCliente/:termino',getCliente)

router.post('/CreateCliente',
[
    check('cedula','La cedula es obligatoria').not().isEmpty(),
    check('nombre','Nombre es obligatorio').not().isEmpty(),
    check('apellido','apellido es obligatorio').not().isEmpty(),
    check('telefono','telefono es obligatorio').not().isEmpty(),
    check('direccion','direccion es obligatorio').not().isEmpty(),
    validarCampos
],
CreateCliente)

router.put('/UpdateCliente/:id',
[
    check('id').custom(ExisteCliente),
    check('cedula','La cedula es obligatoria').not().isEmpty(),
    check('nombre','Nombre es obligatorio').not().isEmpty(),
    check('apellido','apellido es obligatorio').not().isEmpty(),
    check('telefono','telefono es obligatorio').not().isEmpty(),
    check('direccion','direccion es obligatorio').not().isEmpty(),
    validarCampos
], UpdateCliente)

router.delete('/DeleteCliente/:id',[
    check('id').custom(ExisteCliente),
    validarCampos
],DeleteCliente)

module.exports = router;