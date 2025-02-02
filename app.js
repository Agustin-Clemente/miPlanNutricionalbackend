import express from 'express';
 import cors from 'cors';
 import comidasRouter from './routes/comidas.js';

const app = express();



app.use(cors());
app.use(express.json());

app.use('/api/comidas', comidasRouter);

export default async function handler(req, res) {
    // Ejecutar express
     app(req, res);
};

