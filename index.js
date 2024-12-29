

const express = require('express');
const req = require('express/lib/request');
const cors = require('cors')
const { dbConnection } = require('./db/config');
require('dotenv').config();

////Crear el servidor de express 

const app = express();

////BD
dbConnection();

/////cors
app.use(cors())


//////DIRECTORIO PUBLICO
app.use(express.static('public'))


///LECTURA Y PARSEO DEL BODY
app.use(express.json())

///Rutas
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: path.join(__dirname, 'public') });
});
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));
app.use('/api/clientes', require('./routes/cliente'));
app.use('/api/prestamos', require('./routes/prestamo'));
app.use('/api/integrations', require('./routes/integrations'));

//escuchar Peticiones
app.listen(process.env.PORT, () => {
    console.log("SERVER RUNNING " + process.env.PORT)
})