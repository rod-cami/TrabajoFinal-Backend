const express = require('express');
const { obtenerCarritos } = require('../controllers/carrito');
const route = express.Router();
const Carrito = require('../model/carrito');

route.get('/obtenerCarrito', obtenerCarritos);

route.post('/crearElementoCarrito', async (req,res) => {
  const {nombrePlato,ingredientes,precio,pedidoID} = req.body;

  const nuevoElementoCarrito = new Carrito({
    nombrePlato,
    ingredientes,
    precio,
    pedidoID
  })

  await nuevoElementoCarrito.save()

  res.json({
    mensaje: `Carrito ${pedidoID} creado con éxito`
  })
})

module.exports = route;