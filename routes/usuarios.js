const express = require('express');
const route = express.Router();
const User = require('../model/usuarios');

route.get('/obtenerUsuarios', (req,res) => {
  res.send('info obtenida')
});

route.post('/crearUsuario', async (req,res) => {
  const {nombre,apellido,email,password,estado,rol} = req.body;

  const nuevoUsuario = new User({
    nombre,
    apellido,
    email,
    password,
    estado,
    rol
  })

  await nuevoUsuario.save()

  res.json({
    mensaje: `Usuario ${nombre} creado con éxito`
  })
})

module.exports = route;