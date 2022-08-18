const Usuario = require('../models/Usuario');
const Cliente = require('../models/Cliente');

const ExisteCliente = async (id) =>{
    const existeCliente  = await Cliente.findById(id);
    if(!existeCliente) throw new Error ("Cliente no existe");
}

module.exports = {
    ExisteCliente
}