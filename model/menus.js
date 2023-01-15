const { Schema, model } = require('mongoose');

const menues = new Schema({
  nombre: String,
  estado: String,
  precio: Number,
  detalle: String,
  ingredientes: Array,
  categoria: String
});

module.exports = model('Menues', menues);