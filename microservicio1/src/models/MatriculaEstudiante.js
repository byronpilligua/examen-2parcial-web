const {Schema, model} = require('mongoose');

const MatriculaEstudianteSchema = new Schema({
  IDestudiante  :{
    type: String
  },
  nombre:{
    type: String
  },
  cursomatriculado:{
    type: String
  },
  horario:{
    type: String
  },
  fecha:{
    type: String
  },
  estado:{
    type: String
  }
});


module.exports = model('MatriculaEstudiante',estudianteSchema);