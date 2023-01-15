const express = require('express');
const route = express.Router();
const Menu = require('../model/menus');

route.get('/obtenerMenues', (req,res) => {
  res.send('info obtenida')
});

route.post('/crearMenu', async (req,res) => {
  const {nombre,estado,precio,detalle,ingredientes,categoria} = req.body;

  const nuevoMenu = new Menu({
    nombre,
    estado,
    precio,
    detalle,
    ingredientes,
    categoria
  })

  await nuevoMenu.save()

  res.json({
    mensaje: `Menu ${nombre} creado con éxito`
  })
})

module.exports = route;