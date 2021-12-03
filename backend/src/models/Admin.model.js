const mongoose = require('mongoose');
const {Schema} = mongoose;

const AdminSchema = new Schema({
    nombre:String,
    apellido:String,
    telefono:Number,
    direccion:String,
    correo:String,
    contrasena:String
})

module.exports = mongoose.model('admin',AdminSchema)