const mongoose = require('mongoose');
const { Schema } = mongoose;

const notasSchema = new Schema({
    IDEstudiantes: { type: String, required: true },
    nombre: { type: String, required: true },
    curso: { type: String, required: true },
    horario: { type: String, required: true },
    fecha: { type: String, required: true },
    notapractica: { type: String, required: true },
    Promedio: { type: String, required: true }


});

module.exports = mongoose.model("notas", notasSchema);