const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getPrestamo, CreatePrestamo, UpdatePrestamo, DeletePrestamo, getPrestamoByCliente, getInteresById } = require('../controllers/prestamo');
const { isDate } = require('../helpers/isDate');
const { ExistePrestamo } = require('../helpers/validaciones-db');
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');


router.use(validarJWT)

router.get('/getInteresById/:id',getInteresById)

router.get('/getPrestamo/:termino',getPrestamo)

router.get('/getPrestamoByCliente/:termino',getPrestamoByCliente)

router.post('/CreatePrestamo',
[
    check('id_cliente','el cliente es obligatorio').not().isEmpty(),
    check('cliente','el cliente es obligatorio').not().isEmpty(),
    check('fecha_prestamo','la fecha de prestamo es obligatoria').not().isEmpty(),
    check('valor_prestamo','El valor de prestamo es obligatorio').not().isEmpty(),
    check('tasa_interes','La tasa interes es obligatoria').not().isEmpty(),
    check('periodo_pago','El periodo de pago es requerido').not().isEmpty(),
    validarCampos
],
CreatePrestamo)

router.put('/UpdatePrestamo/:id',
[
    check('id').custom(ExistePrestamo),
    check('id_cliente','el cliente es obligatorio').not().isEmpty(),
    check('fecha_prestamo','la fecha de prestamo es obligatoria').not().isEmpty(),
    check('valor_prestamo','El valor de prestamo es obligatorio').not().isEmpty(),
    check('tasa_interes','La tasa interes es obligatoria').not().isEmpty(),
    check('periodo_pago','El periodo de pago es requerido').not().isEmpty(),
    validarCampos
], UpdatePrestamo)

router.delete('/DeletePrestamo/:id',[
    check('id').custom(ExistePrestamo),
    validarCampos
],DeletePrestamo)

module.exports = router;