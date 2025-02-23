import express from 'express';
import Sticker from '../models/Sticker.js';
const router = express.Router();

// Rutas para Stickers
router.get('/stickers', async (req, res) => {
  try {
    const stickers = await Sticker.find();
    res.json(stickers);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los stickers' });
  }
});

export default router;