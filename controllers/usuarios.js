const User = require('../model/usuarios');
const bcrypt = require('bcrypt')

const obtenerUsuarios= async (req,res) => {
  const usuarios = await User.find({});
  res.json(usuarios);
}

const obtenerUnUsuario = async (req,res) => {
  const usuarios = await User.findById(req.params.userId);
  res.json(usuarios);
}

const crearUsuario = async (req,res) => {
  const {nombre,apellido,email,password,estado,rol} = req.body;
  const result = await User.findOne({email});

  if (result) {
    res.status(400).send({message : 'Ya existe un usuario con este email'})
  } else {
    const saltRound = 15;
    const passEncripted = bcrypt.hashSync(password,saltRound)
    const nuevoUsuario = new User({
      nombre,
      apellido,
      email,
      password : passEncripted,
      estado,
      rol
    })
  
    await nuevoUsuario.save()
    res.status(200).send({message : 'Usuario creado con exito'})
  }
  
}

const modificarUsuario = async (req,res) =>{
  const {nombre,apellido,email,estado,rol} = req.body;
  const result = await User.find({email:email});
  const result2 = await User.findById(req.params.userId)
  
  if (result && email !== result2.email) {
    res.status(400).send({message : 'Ya existe un usuario con este email'})
    
  } else {
    const userMod = await User.findByIdAndUpdate(req.params.userId, {
      nombre,
      apellido,
      email,
      estado,
      rol
    })
  
    res.json(userMod)
  }
}

const borrarUsuario = async (req,res) =>{
  const userDel = await User.findByIdAndDelete(req.params.userId);
  res.json(userDel);
}

module.exports = {obtenerUnUsuario, obtenerUsuarios, crearUsuario, modificarUsuario, borrarUsuario}
