const mongoose = require('mongoose');
require('dotenv').config();

const base = process.env.BASE;

const connectDB = async () => {
  try {
    await mongoose.connect(base);
    console.log('Conectada')
  } catch (error) {
    console.log('No Conectada')
  }
}

connectDB();
module.exports = { connectDB }

