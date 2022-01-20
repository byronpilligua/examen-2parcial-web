const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const MatriculasSchema = new Schema({
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

MatriculasSchema.methods.encriptarPassword = async(passw)=>{
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(passw, salt);
};



MatriculasSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Matriculas',MatriculasSchema);