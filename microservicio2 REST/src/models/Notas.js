const {Schema, model} = require('mongoose');

const notasSchema = new Schema({
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
  notapractica:{
    type: String
  },
  notateoria:{
    type: String
  },
   promedio:{
    type: String
  }
});




module.exports = model('Notas',notasSchema);