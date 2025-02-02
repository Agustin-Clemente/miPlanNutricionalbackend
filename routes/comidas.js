import express from 'express';
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

export default router;