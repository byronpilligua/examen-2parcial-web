const {FacultadModel, EstudianteModel} = require('../models');
const {generarToken} = require('../helpers');
const {validate} = require('email-validator');

class AuthService{

  async signupFacultad(entity){
    if(!entity.nombre){
      const error = new Error();
      error.status = 400;
      error.message = "Debe enviar el nombre!"
      throw error;
    }

    if(!entity.descripcion){
      const error = new Error();
      error.status = 400;
      error.message = "Debe enviar la descripción!"
      throw error;
    }

    if(!validate(entity.email)){
      const error = new Error();
      error.status = 400;
      error.message = "Email inválido!"
      throw error;
    }

    const existeEmail = await FacultadModel.findOne({email: entity.email});
    if(existeEmail){
      const error = new Error();
      error.status = 400;
      error.message = 'El email ya esta registrado!' 
      throw error;
    }

    if(!entity.password){
      const error = new Error();
      error.status = 400;
      error.message = "Debe enviar la contraseña!"
      throw error;
    }

    if(entity.password.length < 8){
      const error = new Error();
      error.status = 400;
      error.message = 'La contraseña debe tener mínimo 8 caracteres!';
      throw error;
    }
    const facultad = new FacultadModel(entity);
    facultad.password = await facultad.encriptarPassword(entity.password);
    await facultad.save();

    const token = generarToken(facultad._id);
    
    return {facultad, token}
  }

  async signupEstudiante(entity){
    if(!entity.nombre){
      const error = new Error();
      error.status = 400;
      error.message = 'Debe enviar el nombre!';
      throw error;
    }
    
    if(!entity.apellido){
      const error = new Error();
      error.status = 400;
      error.message = 'Debe enviar el apellido!';
      throw error;
    }

    const facultad = await FacultadModel.findById(entity._facultad);
    if(!facultad){
      const error = new Error();
      error.status = 400;
      error.message = 'El id de la facultad no existe!';
      throw error;
    }

    if(!validate(entity.email)){
      const error = new Error();
      error.status = 400;
      error.message = "Email inválido!"
      throw error;
    }

    const existeEmail = await EstudianteModel.findOne({email: entity.email});
    if(existeEmail){
      const error = new Error();
      error.status = 400;
      error.message = 'El email ya esta registrado!' 
      throw error;
    }

    if(!entity.password){
      const error = new Error();
      error.status = 400;
      error.message = "Debe enviar la contraseña!"
      throw error;
    }

    if(entity.password.length < 8){
      const error = new Error();
      error.status = 400;
      error.message = 'La contraseña debe tener mínimo 8 caracteres!';
      throw error;
    }

    const estudiante = new EstudianteModel(entity);
    estudiante.password = await estudiante.encriptarPassword(entity.password);
    await estudiante.save();

    return estudiante;
  }

  async signinEstudiante(entity){

    if(!validate(entity.email)){
      const error = new Error();
      error.status = 400;
      error.message = "Email inválido!"
      throw error;
    }

    const estudiante = await EstudianteModel.findOne({email: entity.email});
    if(!estudiante){
      const error = new Error();
      error.status = 400;
      error.message = 'El email no esta registrado' 
      throw error;
    }
    
    const valido = await estudiante.validarPassword(entity.password);
    if(!valido){
      const error = new Error();
      error.status = 400;
      error.message = 'Contraseña incorrecta!' 
      throw error;
    }
    
    return estudiante;
  }

  async signinFacultad(entity){

    if(!validate(entity.email)){
      const error = new Error();
      error.status = 400;
      error.message = "Email inválido!"
      throw error;
    }
    
    const facultad = await FacultadModel.findOne({email: entity.email});
    if(!facultad){
      const error = new Error();
      error.status = 400;
      error.message = 'El email no esta registrado' 
      throw error;
    }
    const valido = await facultad.validarPassword(entity.password);
    if(!valido){
      const error = new Error();
      error.status = 400;
      error.message = 'Contraseña incorrecta!' 
      throw error;
    }

    const token = generarToken(facultad._id);

    return {facultad, token}
  }
}

module.exports = new AuthService();