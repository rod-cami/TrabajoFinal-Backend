const { Schema, model } = require('mongoose');

const carrito = new Schema({
  nombrePlato: String,
  ingredientes: Array,
  precio: Number,
  pedidoID: String
});

module.exports = model('Carrito', carrito);