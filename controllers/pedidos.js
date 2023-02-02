const Pedido = require('../model/pedidos');

const obtenerPedidos= async (req,res) => {
  const pedidos = await Pedido.find({});
  res.json(pedidos);
}

const obtenerUnPedido = async (req,res) => {
  const pedidos = await Pedido.findById(req.params.pedidoId);
  res.json(pedidos);
}

const modificarPedido = async (req,res) =>{
  const {estado} = req.body;
  const pedidoMod = await Pedido.findByIdAndUpdate(req.params.pedidoId, {
    estado
  })

  res.json(pedidoMod)
}

const crearPedido =  async (req,res) => {
  const {pedidoId,usuarioID,fecha,comida,total} = req.body;

  const nuevoPedido = new Pedido({
    _id : pedidoId,
    usuarioID,
    fecha,
    carrito: comida,
    estado: "Pendiente",
    total
  })

  await nuevoPedido.save()
  

  res.json({
    mensaje: `Pedido ${pedidoId} creado con éxito`
  })
}

module.exports = {obtenerPedidos, obtenerUnPedido, modificarPedido, crearPedido}