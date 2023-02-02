const express = require('express');
const { obtenerPedidos, modificarPedido, crearPedido } = require('../controllers/pedidos');
const route = express.Router();
const Pedido = require('../model/pedidos');

route.get('/obtenerPedidos', obtenerPedidos);
route.put('/modificarEstadoPedido/:pedidoId', modificarPedido)

route.post('/crearPedido',crearPedido)

module.exports = route;