const mongoose = require('mongoose');



const dbConnection = async ()=>{
    try {
        await mongoose.connect(process.env.db_conn);
        console.log('db Online')
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to connecting bd')
    }
}

module.exports = {
    dbConnection
}