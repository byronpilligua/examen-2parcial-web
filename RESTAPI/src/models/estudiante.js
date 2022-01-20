const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const estudianteSchema = new Schema({
  nombre:{
    type: String
  },
  apellido:{
    type: String
  },
  _facultad:{
    type: Schema.Types.ObjectId,
    ref:'Facultad',
    autopopulate: true
  },
  email:{
    type: String
  },
  password:{
    type: String
  }
});

estudianteSchema.methods.encriptarPassword = async(passw)=>{
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(passw, salt);
};

estudianteSchema.methods.validarPassword = async function(passw){
  return await bcrypt.compare(passw, this.password);
}

estudianteSchema.methods.toJSON = function(){
  let estudiante = this.toObject();
  delete estudiante.password;
  return estudiante;
};

estudianteSchema.plugin(require('mongoose-autopopulate'));

module.exports = model('Estudiante',estudianteSchema);