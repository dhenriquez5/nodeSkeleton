const Usuario = require('../models/Usuario');
const Cliente = require('../models/Cliente');
const Prestamo = require('../models/Prestamo');


const ExisteCliente = async (id) =>{
    const existeCliente  = await Cliente.findById(id);
    if(!existeCliente) throw new Error ("Cliente no existe");
}

const ExistePrestamo = async (id) =>{
    const existePrestamo = await Prestamo.findById(id);
    if(!existePrestamo) throw new Error ("Prestamo no existe");
}

module.exports = {
    ExisteCliente,
    ExistePrestamo
}