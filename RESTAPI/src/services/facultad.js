const {FacultadModel, ActividadModel} = require('../models');
const {validate} = require('email-validator');

class FacultadService{

  async getAll(){
    return await FacultadModel.find();
  }

  async get(id){
    if(!id){
      const error = new Error();
      error.status = 400;
      error.message = "Debe enviar el id!"
      throw error;
    }

    const facultad = await FacultadModel.findById(id);
    
    return facultad
  }

  async update(id, entity){
    if(!id){
      const error = new Error();
      error.status = 400;
      error.message = "Debe enviar el id!"
      throw error;
    }

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

    const facultad = await FacultadModel.findOne({email: entity.email, _id:{$ne:id}});
    if(facultad){
      const error = new Error();
      error.status = 400;
      error.message = 'El email ya esta registrado!' 
      throw error;
    }

    return await FacultadModel.findByIdAndUpdate(id,{
      nombre: entity.nombre,
      descripcion: entity.descripcion,
      email: entity.email
    })
  }

  async updatePassword(id, entity){
    if(!id){
      const error = new Error();
      error.status = 400;
      error.message = "Debe enviar el id!"
      throw error;
    }

    const facultad = await FacultadModel.findById(id);
    const valida = await facultad.validarPassword(entity.password)
    if(!valida){
      const error = new Error();
      error.status = 400;
      error.message = 'La contraseña no coincide con la contraseña actual';
      throw error;
    }

    if(entity.newPassword.length < 8){
      const error = new Error();
      error.status = 400;
      error.message = 'La nueva contraseña debe tener mínimo 8 caracteres!';
      throw error;
    }
    
    facultad.password = await facultad.encriptarPassword(entity.newPassword);
    return await facultad.save();
  }

  async delete(id){
    await ActividadModel.deleteMany({_facultad: id});
    return await FacultadModel.findByIdAndDelete(id);
  }
  
}

module.exports = new FacultadService();