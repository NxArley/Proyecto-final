const {Router} = require('express');

const router = Router();

const EmpleadoCtrl = require('../controllers/Empleado.controllers')

router.post('/crear', EmpleadoCtrl.crear)
router.get('/listarEmpleados', EmpleadoCtrl.listar)
router.get('/listar/:id', EmpleadoCtrl.listarId)
router.get('/listarEmpleadosJefe/:id', EmpleadoCtrl.empleadoDeUnJefe)
router.delete('/eliminar/:id', EmpleadoCtrl.eliminar)
router.put('/actualizar/:id', EmpleadoCtrl.actualizar)

module.exports = router