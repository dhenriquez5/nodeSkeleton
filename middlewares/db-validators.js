const Usuario = require('../models/Usuario');

const ExistEmail=async(correo)=>{
    const existEmail= await ExistEmail.findOne({correo: correo});
    if(existEmail) throw new Error("El correo " + existEmail +" ya se encuentra registrado");
}

module.exports ={
    ExistEmail
}