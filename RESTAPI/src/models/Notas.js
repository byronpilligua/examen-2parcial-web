const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const notasSchema = new Schema({
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

notasSchema.methods.encriptarPassword = async(passw)=>{
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(passw, salt);
};


module.exports = model('notas',notasSchema);