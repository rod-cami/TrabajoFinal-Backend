const express = require('express');
const { obtenerPedidos, modificarPedido } = require('../controllers/pedidos');
const route = express.Router();
const Pedido = require('../model/pedidos');

route.get('/obtenerPedidos', obtenerPedidos);
route.put('/modificarEstadoPedido/:pedidoId', modificarPedido)

route.post('/crearPedido', async (req,res) => {
  const {_id,usuarioID,fecha,carrito,estado,total} = req.body;

  const nuevoPedido = new Pedido({
    _id,
    usuarioID,
    fecha,
    carrito,
    estado,
    total
  })

  await nuevoPedido.save()

  res.json({
    mensaje: `Pedido ${_id} creado con éxito`
  })
})

module.exports = route;