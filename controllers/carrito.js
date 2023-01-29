const Carrito = require('../model/carrito');

const obtenerCarritos= async (req,res) => {
  const carrito = await Carrito.find({});
  res.json(carrito);
}

const obtenerUnCarrito = async (req,res) => {
  const carrito = await Carrito.findById(req.params.carritoId);
  res.json(carrito);
}

module.exports = {obtenerCarritos , obtenerUnCarrito}