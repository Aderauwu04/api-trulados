import express from 'express';
import Icecream from '../models/Icecream.js';
const router = express.Router();

// Rutas para Helados
router.get('/helados', async (req, res) => {
  try {
    const helados = await Icecream.find();
    res.json(helados);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los helados' });
  }
});

export default router;