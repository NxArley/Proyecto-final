const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    nombres:String,
    apellidos:String,
    identificacion:String,
    puesto:String,
    tipocontrato:String,
    jefe:String
})

module.exports = mongoose.model('usuario',UsuarioSchema)