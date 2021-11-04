import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre es obligatorio']},
    mesa: {type: String, required: [true, 'Mesa es obligatoria']},
    size: Number,
    base: String,
    cobertura: String,
    toppings: Array,
    estado: {type: String, default: "Pendiente"}
});

const Pedido = mongoose.model('Pedido', pedidoSchema);
export default Pedido;