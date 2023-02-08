const Carrito = require('../model/carrito');

const obtenerCarritos= async (req,res) => {
  const carrito = await Carrito.find({});
  res.json(carrito);
}

const obtenerUnCarrito = async (req,res) => {
  const carrito = await Carrito.findById(req.params.carritoId);
  res.json(carrito);
}

const borrarCarrito = async (req,res) =>{
  const carritoDel = await Carrito.findByIdAndDelete(req.params.carritoID);
  res.json(carritoDel);
}

const modificarCarrito = async (req,res) =>{
  const {estado} = req.body;
  const userMod = await Carrito.findByIdAndUpdate(req.params.carritoId, {
    estado
  })

  res.json(userMod)
}

const crearCarrito = async (req,res) => {
  const {nombrePlato,ingredientes,precio,categoria,pedidoID,estado} = req.body;

  const nuevoElementoCarrito = new Carrito({
    nombrePlato,
    ingredientes,
    precio,
    categoria,
    pedidoID,
    estado
  })

  await nuevoElementoCarrito.save()

  res.json({
    mensaje: `Carrito ${pedidoID} creado con éxito`
  })
}

module.exports = {obtenerCarritos , obtenerUnCarrito, borrarCarrito,modificarCarrito, crearCarrito} 