import express from 'express';
 import cors from 'cors';
 import comidasRouter from './routes/comidas.js';
 import 'dotenv/config';

const app = express();

const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());

app.use('/api/comidas', comidasRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default async function handler(req, res) {
    app(req, res);
  };

