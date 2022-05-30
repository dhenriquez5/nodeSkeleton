const Usuario = require('../models/Usuario');

const ExistEmail=async(email)=>{
    const existEmail= await Usuario.findOne({email: email});
    if(existEmail) throw new Error("El correo " + existEmail +" ya se encuentra registrado");
}

module.exports ={
    ExistEmail
}