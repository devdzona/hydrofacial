import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/api/products', productRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));