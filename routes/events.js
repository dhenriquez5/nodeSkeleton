const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { getEventos, CreateEvento, UpdateEvento, DeleteEvento } = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos')
const { validarJWT } = require('../middlewares/validar-jwt');

router.use(validarJWT)


router.get('/',getEventos)

router.post('/',
[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatorio').custom( isDate ),
    check('end','Fecha final es obligatorio').custom( isDate ),
    validarCampos
],
CreateEvento)

router.put('/:id',
[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatorio').custom( isDate ),
    check('end','Fecha final es obligatorio').custom( isDate ),
    validarCampos
], UpdateEvento)

router.delete('/:id',DeleteEvento)

module.exports = router;