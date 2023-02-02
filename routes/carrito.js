const express = require('express');
const { obtenerCarritos, borrarCarrito, modificarCarrito } = require('../controllers/carrito');
const route = express.Router();
const Carrito = require('../model/carrito');

route.get('/obtenerCarrito', obtenerCarritos);

route.post('/crearElementoCarrito', async (req,res) => {
  const {nombrePlato,ingredientes,precio,categoria,pedidoID,estado} = req.body;

  const nuevoElementoCarrito = new Carrito({
    nombrePlato,
    ingredientes,
    precio,
    categoria,
    pedidoID,
    estado
  })

  await nuevoElementoCarrito.save()

  res.json({
    mensaje: `Carrito ${pedidoID} creado con éxito`
  })
})

route.put('/modificarCarrito/:carritoId', modificarCarrito)
route.delete('/borrarCarrito/:carritoID', borrarCarrito)


module.exports = route;