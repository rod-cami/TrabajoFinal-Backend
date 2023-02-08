const express = require('express');
const { obtenerMenus, obtenerUnMenu, crearMenu, modificarMenu, borrarMenu } = require('../controllers/menus');
const {check} = require('express-validator')
const route = express.Router();

// nombre,estado,precio,detalle,ingredientes,categoria,imagen
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
    .trim().matches(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/)
    .not().isEmpty().isLength({min: 2 , max: 300})
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
    .trim().matches(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/)
    .not().isEmpty().isLength({min: 2 , max: 300})
    .withMessage('Error en Backend')],
  modificarMenu)
route.delete('/borrarMenu/:menuID', borrarMenu)

module.exports = route;