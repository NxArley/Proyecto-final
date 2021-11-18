const PedidoCtrl = {}

const Pedido = require('../models/Pedido.model')

PedidoCtrl.pedir = async(req,res)=>{

    const {nombre,mesa,size,base,cobertura,toppings,estado} = req.body;

    const NuevoPedido = new Pedido({

        nombre,
        mesa,
        size,
        base,
        cobertura,
        toppings,
        estado
    })

    const respuesta = await NuevoPedido.save()

    res.json({
        mensaje:"pedido realizado exitosamente",
        respuesta
    })

}

PedidoCtrl.listaPedidos = async(req,res)=>{

    const respuesta = await Pedido.find()
    res.json(respuesta)
}

module.exports = PedidoCtrl