const { Schema, model } = require('mongoose');

const usuarios = new Schema({
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  estado: String,
  rol: String
});

module.exports = model('Usuarios', usuarios);