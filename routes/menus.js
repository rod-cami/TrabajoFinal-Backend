const express = require('express');
const { obtenerMenus, obtenerUnMenu, crearMenu, modificarMenu, borrarMenu } = require('../controllers/menus');
const {check} = require('express-validator')
const route = express.Router();


route.get('/obtenerMenus', obtenerMenus);
route.get('/obtenerUnMenu/:menuId', obtenerUnMenu);
route.post('/crearMenu',
  [check("nombre")
    .trim().escape().isAlpha('es-ES',{ignore : ' '})
    .not().isEmpty().isLength({min: 2 , max: 15})
    .withMessage('Error en Backend'), 
  check("precio")
    .trim().escape().isNumeric()
    .not().isEmpty().isLength({min: 2 , max: 5})
    .withMessage('Error en Backend'), 
  check("detalle")
    .trim().escape().matches(/^[a-z0-9A-Z\u00C0-\u017F\s,.]+$/)
    .not().isEmpty().isLength({min: 2 , max: 300})
    .withMessage('Error en Backend'), 
  check("ingredientes")
    .trim().escape().matches(/^[a-z0-9A-Z\u00C0-\u017F\s,.]+$/)
    .not().isEmpty().isLength({min: 2 , max: 300})
    .withMessage('Error en Backend'), 
  check("imagen")
    .trim().matches(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)
    .not().isEmpty().isLength({min: 2 , max: 600})
    .withMessage('Error en Backend')], 
  crearMenu)
route.put('/modificarMenu/:menuId', 
  [check("nombre")
    .trim().escape().isAlpha('es-ES',{ignore : ' '})
    .not().isEmpty().isLength({min: 2 , max: 15})
    .withMessage('Error en Backend'), 
  check("precio")
    .trim().escape().isNumeric()
    .not().isEmpty().isLength({min: 2 , max: 5})
    .withMessage('Error en Backend'), 
  check("detalle")
    .trim().escape().matches(/^[a-z0-9A-Z\u00C0-\u017F\s,.]+$/)
    .not().isEmpty().isLength({min: 2 , max: 300})
    .withMessage('Error en Backend'), 
  check("ingredientes")
    .trim().escape().matches(/^[a-z0-9A-Z\u00C0-\u017F\s,.]+$/)
    .not().isEmpty().isLength({min: 2 , max: 300})
    .withMessage('Error en Backend'), 
  check("imagen")
    .trim().matches(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)
    .not().isEmpty().isLength({min: 2 , max: 600})
    .withMessage('Error en Backend')],
  modificarMenu)
route.delete('/borrarMenu/:menuID', borrarMenu)

module.exports = route;