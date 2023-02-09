const express = require('express');
const { check } = require('express-validator');
const { obtenerUsuarios, crearUsuario, obtenerUnUsuario, modificarUsuario, borrarUsuario, loginUsuario, registrarUsuario } = require('../controllers/usuarios');
const { jwtValidator } = require('../middleware/jwt');
const route = express.Router();

route.get('/obtenerUsuarios',obtenerUsuarios);
route.get('/obtenerUnUsuario/:userId', obtenerUnUsuario);
route.post('/crearUsuario',
  [
  check("nombre")
    .trim().escape().matches(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .not().isEmpty().isLength({min: 2 , max: 15})
    .withMessage('Error en Backend'), 
  check("apellido")
    .trim().escape().matches(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .not().isEmpty().isLength({min: 2 , max: 25})
    .withMessage('Error en Backend'), 
  check("password")
    .trim().matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,30}$/)
    .not().isEmpty().isLength({min: 2 , max: 30})
    .withMessage('Error en Backend'), 
  check("email")
    .trim().matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)
    .not().isEmpty().isLength({min: 2 , max: 300})
    .withMessage('Error en Backend')
  ]
  , crearUsuario);
route.post('/registrarUsuario',
  [
  check("nombre")
    .trim().escape().matches(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .not().isEmpty().isLength({min: 2 , max: 15})
    .withMessage('Error en Backend'), 
  check("apellido")
    .trim().escape().matches(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .not().isEmpty().isLength({min: 2 , max: 25})
    .withMessage('Error en Backend'), 
  check("password")
    .trim().matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,30}$/)
    .not().isEmpty().isLength({min: 2 , max: 30})
    .withMessage('Error en Backend'), 
  check("email")
    .trim().matches(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/)
    .not().isEmpty().isLength({min: 2 , max: 300})
    .withMessage('Error en Backend')
  ]
  , registrarUsuario);
route.post('/loginUsuario', loginUsuario);
route.put('/modificarUsuario/:userId',
  [
  check("nombre")
    .trim().escape().matches(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .not().isEmpty().isLength({min: 2 , max: 15})
    .withMessage('Error en Backend'), 
  check("apellido")
    .trim().escape().matches(/^[a-zA-Z\u00C0-\u017F\s]+$/)
    .not().isEmpty().isLength({min: 2 , max: 25})
    .withMessage('Error en Backend'), 
  check("email")
    .trim().matches(/^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/)
    .not().isEmpty().isLength({min: 2 , max: 300})
    .withMessage('Error en Backend')
  ]
  , modificarUsuario);
route.delete('/borrarUsuario/:userId', borrarUsuario);

module.exports = route;