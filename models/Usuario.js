const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    name: { type: String, required:true },
    lastName: { type: String, required:true },
    email: { type: String, required:true,unique:true },
    password: { type: String, required:true},
    estado:{type:Boolean,default:true},
})

module.exports = model('Usuario',UsuarioSchema);