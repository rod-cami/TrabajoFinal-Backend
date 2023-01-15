const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://rod_cami:Base1234@proyectofinal.hpubysw.mongodb.net/?retryWrites=true&w=majority');
    console.log('Conectada')
  } catch (error) {
    console.log('No Conectada')
  }
}
 connectDB();

 module.exports = { connectDB }