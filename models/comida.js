import mongoose from 'mongoose';

const comidaSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    hora: { type: String, required: true },
    comida: { type: String, required: true },
    evento: { type: Boolean, default: false }
});

export default mongoose.model('Comida', comidaSchema);