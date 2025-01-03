const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getPrestamo, CreatePrestamo, UpdatePrestamo, DeletePrestamo, getPrestamoByCliente, getInteresById, generatePago, reCalcularInteres, deletePago, getPrestamoActivo, getProximosCobrar, GetAllPagos,GetBalance, getPrestamosByDate } = require('../controllers/prestamo');
const { isDate } = require('../helpers/isDate');
const { ExistePrestamo } = require('../helpers/validaciones-db');
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');


router.use(validarJWT)

router.get('/getPrestamoActivo',getPrestamoActivo)

router.get('/getPrestamo/:termino', getPrestamo)

router.get('/getPrestamoByCliente/:termino', getPrestamoByCliente)

router.post('/CreatePrestamo',
    [
        check('id_cliente', 'el cliente es obligatorio').not().isEmpty(),
        check('cliente', 'el cliente es obligatorio').not().isEmpty(),
        check('fecha_prestamo', 'la fecha de prestamo es obligatoria').not().isEmpty(),
        check('valor_prestamo', 'El valor de prestamo es obligatorio').not().isEmpty(),
        check('tasa_interes', 'La tasa interes es obligatoria').not().isEmpty(),
        check('periodo_pago', 'El periodo de pago es requerido').not().isEmpty(),
        validarCampos
    ],
    CreatePrestamo)

router.put('/UpdatePrestamo/:id',
    [
        check('id').custom(ExistePrestamo),
        check('id_cliente', 'el cliente es obligatorio').not().isEmpty(),
        check('fecha_prestamo', 'la fecha de prestamo es obligatoria').not().isEmpty(),
        check('valor_prestamo', 'El valor de prestamo es obligatorio').not().isEmpty(),
        check('tasa_interes', 'La tasa interes es obligatoria').not().isEmpty(),
        check('periodo_pago', 'El periodo de pago es requerido').not().isEmpty(),
        validarCampos
    ], UpdatePrestamo)

router.delete('/DeletePrestamo/:id', [
    check('id').custom(ExistePrestamo),
    validarCampos
], DeletePrestamo)

router.post('/generatePago',
    [
        check('prestamo_id', 'el cliente es obligatorio').not().isEmpty(),
        check('valor_pagar', 'El valor de pago  es obligatorio').not().isEmpty(),
        check('fecha_pago', 'La fecha de pago es obligatorio').not().isEmpty(),
        check('valor_interes', 'La tasa interes es obligatoria').not().isEmpty(),
        validarCampos
    ],
    generatePago)

router.post('/reCalcularInteres',
    [
        check('prestamo_id', 'el cliente es obligatorio').not().isEmpty(),
        check('fecha_corte', 'La fecha de corte es  obligatorio').not().isEmpty(),
    ],
    reCalcularInteres
)

router.post('/deletePago',
    [
        check('pago_id', 'el pago es obligatorio').not().isEmpty(),
        check('prestamo_id', 'El prestamo es obligatorio').not().isEmpty(),
    ],
    deletePago
)

router.post('/getProximosCobrar',[
    check('fecha_ini', 'Fecha inicio obligatorio').not().isEmpty(),
    check('fecha_fin', 'Fecha fin obligatorio').not().isEmpty(),
],getProximosCobrar)

router.post('/getAllPagos',[
    check('fecha_ini', 'Fecha inicio obligatorio').not().isEmpty(),
    check('fecha_fin', 'Fecha fin obligatorio').not().isEmpty(),
],GetAllPagos)

router.post('/getBalance',[
    check('fecha_ini', 'Fecha inicio obligatorio').not().isEmpty(),
    check('fecha_fin', 'Fecha fin obligatorio').not().isEmpty(),
],GetBalance)

router.post('/getPrestamosByDate',[
    check('fecha_ini', 'Fecha inicio obligatorio').not().isEmpty(),
    check('fecha_fin', 'Fecha fin obligatorio').not().isEmpty(),
],getPrestamosByDate)

module.exports = router;