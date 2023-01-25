const Menu = require('../model/menus');

const obtenerMenus = async (req,res) => {
  const menues = await Menu.find({});
  res.json(menues);
}

const obtenerUnMenu = async (req,res) => {
  const menues = await Menu.findById(req.params.menuId);
  res.json(menues);
}

const crearMenu = async (req,res) => {
  const {nombre,estado,precio,detalle,ingredientes,categoria,imagen} = req.body;
  let arrayIngredientes = ingredientes.split(',')
  const nuevoMenu = new Menu({
    nombre,
    estado,
    precio,
    detalle,
    ingredientes : arrayIngredientes,
    categoria,
    imagen
  })

  await nuevoMenu.save()

  res.json({
    mensaje: `Menu ${nombre} creado con éxito`
  })
}

const modificarMenu = async (req,res) =>{
  const {_id,nombre,estado,precio,detalle,ingredientes,categoria,imagen} = req.body;
  let arrayIngredientes = ingredientes.split(',')
  const menuMod = await Menu.findByIdAndUpdate(req.params.menuId, {
    _id,
    nombre,
    estado,
    precio,
    detalle,
    ingredientes : arrayIngredientes,
    categoria,
    imagen
  })

  res.json(menuMod)
}

const borrarMenu = async (req,res) =>{
  const menuDel = await Menu.findByIdAndDelete(req.params.menuID);
  res.json(menuDel);
}

module.exports = { obtenerMenus, obtenerUnMenu, modificarMenu, crearMenu, borrarMenu }
