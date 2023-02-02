const User = require('../model/usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

const loginUsuario = async (req,res) => {
  const {email,password} = req.body;
  
  const result = await User.findOne({"email":email})
  if (result && result.estado === "activo") {
    if (bcrypt.compareSync(password, result.password)) {
      let token = jwt.sign({result},'ClaveSecreta')
      res.status(200).json({result,token})
      
    } else {
      res.status(403).send({message : 'Contraseña incorrecta'})     
    }
  } else {
    res.status(404).send({message : 'Usuario no encontrado'})
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

const registrarUsuario = async (req,res) => {
  const {nombre,apellido,email,password} = req.body;
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
      estado: "activo",
      rol: "usuario"
    })
  
    await nuevoUsuario.save()
    let token = jwt.sign({nuevoUsuario},'ClaveSecreta')
    res.status(200).json({nuevoUsuario,token})
  }
  
}

module.exports = {obtenerUnUsuario, obtenerUsuarios, crearUsuario, modificarUsuario, borrarUsuario, loginUsuario, registrarUsuario}
