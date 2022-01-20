const {Schema, model} = require('mongoose');

const actividadSchema = new Schema({
  titulo:{
    type: String
  },
  descripcion:{
    type: String
  },
  fechaRegistro:{
    type: Date,
    default: Date.now()
  },
  fechaLimite:{
    type: Date
  },
  cupos:{
    type: Number
  },
  _facultad:{
    type: Schema.Types.ObjectId,
    ref: 'Facultad',
    autopopulate: true
  },
  estudiantes:[{
    type: Schema.Types.ObjectId,
    ref: 'Estudiante',
    autopopulate: true
  }],
  estado:{
    type: Boolean,
    default: true
  }
});

actividadSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Actividad',actividadSchema);