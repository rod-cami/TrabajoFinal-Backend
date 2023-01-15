const { Schema, model } = require('mongoose');

const pedidos = new Schema({
  _id: String,
  usuarioID: String,
  fecha: String,
  carrito: Array,
  estado: String,
  total: Number
});

module.exports = model('Pedidos', pedidos);