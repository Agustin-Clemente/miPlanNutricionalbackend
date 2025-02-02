import express from 'express';
 import cors from 'cors';
 import comidasRouter from './routes/comidas.js';
 import 'dotenv/config';

const app = express();


app.use(cors());
app.use(express.json());

app.use('/api/comidas', comidasRouter);

export default app;

