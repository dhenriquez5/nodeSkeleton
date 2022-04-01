var nodemailer = require('nodemailer');
const sendingMails = (emailDestination, name, lastName, code) => {

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dhenriquezturcios@gmail.com',
            pass: 'david1234567'
        }
    });

    var mailOptions = {
        from: 'dhenriquezturcios@gmail.com',
        to: emailDestination,
        subject: 'GoCredix Recuperar Contraseña',
        text: `Hola ${name} ${lastName}. GoCredix te envia el codigo que necesitas para actualizar tu contraseña : ${code}`
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            return false;
        } else {
            console.log('Email sent: ' + info.response);
            return true;
        }
    });


}

const makeCode = (length) => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

module.exports = {
    sendingMails,
    makeCode
}