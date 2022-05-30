const jwt = require('jsonwebtoken');

const generarToken = (uid, name,email,lastName) => {

    return new Promise((resolve, reject) => {
        const payload = { uid, name,email,lastName };
        jwt.sign(payload, process.env.secret_key, {
            expiresIn: '24h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token");
            }
            resolve(token);
        })
    })

}

module.exports = {
    generarToken
}