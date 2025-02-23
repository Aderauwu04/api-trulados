import mongoose from 'mongoose';

mongoose.set('strictQuery', true); // o true, dependiendo de tus necesidades
// Conectar a MongoDB
const connectDB = () => {
  try {
    mongoose.connect('mongodb://localhost:27017/trulados', {});
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Detener la aplicación si no se puede conectar a MongoDB
  }
};

export default connectDB;