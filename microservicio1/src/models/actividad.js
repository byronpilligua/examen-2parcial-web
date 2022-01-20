const {Schema, model} = require('mongoose');

const actividadSchema = new Schema({
 
  _Matricula:{
    type: Schema.Types.ObjectId,
    ref: 'MatriculaEstudiante'
  },
  Notas:[{
    type: Schema.Types.ObjectId,
    ref: 'NotasEstudiante'
  }],

});


module.exports = model('Actividad',actividadSchema);