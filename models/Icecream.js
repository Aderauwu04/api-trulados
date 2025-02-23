import mongoose from 'mongoose';

// Modelo de Helados
const icecreamSchema = new mongoose.Schema({
  name: String,
  taste: String,
  precio: Number,
});
const Icecream = mongoose.model('Icecream', icecreamSchema);
export default Icecream