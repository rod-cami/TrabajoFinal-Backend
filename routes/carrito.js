const express = require('express');
const { obtenerCarritos, borrarCarrito, modificarCarrito, crearCarrito } = require('../controllers/carrito');
const route = express.Router();

route.get('/obtenerCarrito', obtenerCarritos);
route.post('/crearElementoCarrito', crearCarrito)
route.put('/modificarCarrito/:carritoId', modificarCarrito)
route.delete('/borrarCarrito/:carritoID', borrarCarrito)


module.exports = route;