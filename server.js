import express from 'express';
import cors from 'cors';
import connectDB from './db.js';

// Importar rutas
import Icecream from './routes/IcecreamRutes.js';
import Stickers from './routes/StickersRutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDB();

// Rutas
app.use('/api', Icecream);
app.use('/api', Stickers);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Welcome to the Trulados API!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});