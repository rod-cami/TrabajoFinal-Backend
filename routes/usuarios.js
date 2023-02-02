const express = require('express');
const { obtenerUsuarios, crearUsuario, obtenerUnUsuario, modificarUsuario, borrarUsuario, loginUsuario, registrarUsuario } = require('../controllers/usuarios');
const { jwtValidator } = require('../middleware/jwt');
const route = express.Router();

route.get('/obtenerUsuarios',obtenerUsuarios);
route.get('/obtenerUnUsuario/:userId', obtenerUnUsuario);
route.post('/crearUsuario', crearUsuario);
route.post('/registrarUsuario', registrarUsuario);
route.post('/loginUsuario', loginUsuario);
route.put('/modificarUsuario/:userId',modificarUsuario);
route.delete('/borrarUsuario/:userId', borrarUsuario);

module.exports = route;