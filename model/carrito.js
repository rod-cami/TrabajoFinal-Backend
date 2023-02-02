const { Schema, model } = require('mongoose');

const carrito = new Schema({
  nombrePlato: String,
  ingredientes: Array,
  precio: Number,
  categoria: String,
  pedidoID: String,
  estado: String
});

module.exports = model('Carrito', carrito);