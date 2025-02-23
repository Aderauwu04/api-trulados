import mongoose from 'mongoose';

// Modelo de Stickers
const stickerSchema = new mongoose.Schema({
  name: String,
  team: String,
  imagen: String,
});

// Crea el modelo
const Sticker = mongoose.model('Sticker', stickerSchema);

export default Sticker;