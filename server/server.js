import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import helmet from 'helmet';
import fs from 'fs';
import path from 'path';

dotenv.config();
// Ensure the 'uploads' directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

const app = express();
// serve static files
app.use('/uploads', express.static('uploads'));

// Use Helmet for secure HTTP headers
app.use(helmet());


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));



// Routes
app.use('/api/products', productRoutes);

const port = process.env.PORT || 5000;

// Start the server after the database is connected
const startServer = async () => {
    try {
        await connectDB();
        app.listen(port, () => console.log(`Server running on port ${port}`));
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
