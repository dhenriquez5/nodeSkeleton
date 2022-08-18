const { Schema, model } = require('mongoose');

const ClienteSchema = Schema({
    cedula:{type:String, required:true},
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    direccion:{type:String, required:true},
    telefono:{type:String, required:true},
    email:{type:String},
    empresa:{type:String},
    direccion_empresa:{type:String},
    observacion :{type:String},
    user:{ type: Schema.Types.ObjectId, ref:'Usuario',required:true}
})

module.exports= model('Cliente',ClienteSchema);