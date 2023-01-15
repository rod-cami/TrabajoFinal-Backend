const express = require('express');
require('dotenv').config();
require('./database/db')
const usuarios = require('./routes/usuarios')
const menues = require('./routes/menus')
const carrito = require('./routes/carrito')
const pedido = require('./routes/pedidos')
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use('/usuarios', usuarios);
app.use('/menus', menues);
app.use('/carrito', carrito);
app.use('/pedidos', pedido);

app.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`);
})