const express = require('express');
const { obtenerMenus, obtenerUnMenu, crearMenu, modificarMenu, borrarMenu } = require('../controllers/menus');
const route = express.Router();

route.get('/obtenerMenus', obtenerMenus);
route.get('/obtenerUnMenu/:menuId', obtenerUnMenu);
route.post('/crearMenu', crearMenu)
route.put('/modificarMenu/:menuId', modificarMenu)
route.delete('/borrarMenu/:menuID', borrarMenu)

module.exports = route;