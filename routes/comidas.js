/* import express from 'express';
const router = express.Router();
import Comida from '../models/comida.js';

// POST /api/comidas
router.post('/', async (req, res) => {
    try {
        const nuevaComida = new Comida(req.body);
        const comidaGuardada = await nuevaComida.save();
        res.status(201).json(comidaGuardada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
 });

// GET /api/comidas
router.get('/', async (req, res) => {
    try {
    const comidas = await Comida.find();
    res.json(comidas);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
 });

export default router; */

import express from 'express';
const router = express.Router();
import { MongoClient, ServerApiVersion } from 'mongodb';
import 'dotenv/config';
import Comida from '../models/comida.js';

// Variables de entorno
const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
});

async function run(callback) {
  try {
    await client.connect();
    const db = client.db('miPlanNutricional');
    const comidas = db.collection('comidas');
    
      return await callback(comidas);
    
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
       await client.close()
    }
}

// POST /api/comidas
router.post('/', async (req, res) => {
  try {
   const newComida = await run(async (comidas) => {
     const nuevaComida = {
        fecha: new Date(req.body.fecha),
         hora: req.body.hora,
         comida: req.body.comida,
         evento: req.body.evento
     }
    const result = await comidas.insertOne(nuevaComida)
      return { ...nuevaComida, _id: result.insertedId};
  })
   res.status(201).json(newComida);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /api/comidas
/* router.get('/', async (req, res) => {
   try {
    const getComidas = await run(async (comidas) => {
     return await comidas.find().toArray();
  });
      res.json(getComidas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }); */

  router.get('/', async (req, res) => {
    try {
    const comidas = await Comida.find();
    res.json(comidas);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
 });

export default router;