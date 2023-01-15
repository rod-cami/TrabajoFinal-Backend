const express = require('express');
const route = express.Router();
const Carrito = require('../model/carrito');

route.get('/obtenerCarrito', (req,res) => {
  res.send('info obtenida')
});

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