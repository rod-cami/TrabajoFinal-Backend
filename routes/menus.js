const express = require('express');
const route = express.Router();
const Menu = require('../model/menus');

route.get('/obtenerMenus', async (req,res) => {
  const menues = await Menu.find({});
  res.json(menues);

  //return menues
});

route.post('/crearMenu', async (req,res) => {
  const {nombre,estado,precio,detalle,ingredientes,categoria} = req.body;
  let arrayIngredientes = ingredientes.split(',')
  const nuevoMenu = new Menu({
    nombre,
    estado,
    precio,
    detalle,
    ingredientes : arrayIngredientes,
    categoria
  })

  await nuevoMenu.save()

  res.json({
    mensaje: `Menu ${nombre} creado con éxito`
  })
})

module.exports = route;