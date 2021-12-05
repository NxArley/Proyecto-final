const mongoose = require('mongoose');
const {Schema} = mongoose;

const PedidoSchema = new Schema({
    nombre:String,
    mesa:String,
    size:Number,
    base:String,
    cobertura:String,
    toppings:String,
    estado: {type:String, default:"Pendiente"}
})

module.exports = mongoose.model('pedido',PedidoSchema)