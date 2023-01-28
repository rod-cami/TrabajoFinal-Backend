const express = require('express');
const { obtenerUsuarios, crearUsuario, obtenerUnUsuario, modificarUsuario, borrarUsuario } = require('../controllers/usuarios');
const route = express.Router();

route.get('/obtenerUsuarios',obtenerUsuarios);
route.get('/obtenerUnUsuario/:userId', obtenerUnUsuario);
route.post('/crearUsuario', crearUsuario);
route.put('/modificarUsuario/:userId', modificarUsuario);
route.delete('/borrarUsuario/:userId', borrarUsuario);

module.exports = route;