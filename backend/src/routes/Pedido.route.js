const {Router} = require('express');

const router = Router();

const PedidoCtrl = require('../controllers/Pedido.controllers')

router.post('/pedir', PedidoCtrl.pedir)
router.get('/listar', PedidoCtrl.listaPedidos)

module.exports = router