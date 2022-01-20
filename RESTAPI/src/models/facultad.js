const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const facultadSchema = new Schema({
  nombre:{
    type: String
  },
  descripcion:{
    type: String
  },
  email:{
    type: String
  },
  password:{
    type: String
  }
});

facultadSchema.methods.encriptarPassword = async(passw)=>{
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(passw, salt);
};

facultadSchema.methods.validarPassword = async function(passw){
  return await bcrypt.compare(passw, this.password);
}

facultadSchema.methods.toJSON = function(){
  let facultad = this.toObject();
  delete facultad.password;
  return facultad;
};

module.exports = model('Facultad',facultadSchema);