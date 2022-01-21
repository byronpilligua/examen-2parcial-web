const {Schema, model} = require('mongoose');

const MatriculasSchema = new Schema({

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


module.exports = model('Matriculas',MatriculasSchema);