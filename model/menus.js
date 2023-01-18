const { Schema, model } = require('mongoose');

const menues = new Schema({
  nombre: String,
  estado: String,
  precio: Number,
  detalle: String,
  ingredientes: Array,
  categoria: String,
  imagen: String
});

module.exports = model('Menues', menues);