const {EstudianteModel, FacultadModel} = require('../models');
const {validate} = require('email-validator');

class EstudianteService{
  async getAll(){
    return await EstudianteModel.find();
  }

  async get(id){
    if(!id){
      const error = new Error();
      error.status = 400;
      error.message = 'Debe enviar id!';
      throw error;
    }
    const data = await EstudianteModel.findById(id); 
    return data;
  }

  async update(id, entity){
    if(!id){
      const error = new Error();
      error.status = 400;
      error.message = 'Debe enviar id!';
      throw error;
    }

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

    const estudiante = await EstudianteModel.findOne({email: entity.email, _id:{$ne:id}});
    if(estudiante){
      const error = new Error();
      error.status = 400;
      error.message = 'El email ya esta registrado!' 
      throw error;
    }

    return await EstudianteModel.findByIdAndUpdate(id,{
      nombre: entity.nombre,
      apellido: entity.apellido,
      email: entity.email,
      _facultad: entity._facultad
    })
  }

  async updatePassword(id, entity){
    if(!id){
      const error = new Error();
      error.status = 400;
      error.message = "Debe enviar el id!"
      throw error;
    }

    const estudiante = await EstudianteModel.findById(id);
    const valida = await estudiante.validarPassword(entity.password)
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
    
    estudiante.password = await estudiante.encriptarPassword(entity.newPassword);
    return await estudiante.save();
  }

  async delete(id){
    return await EstudianteModel.findByIdAndDelete(id);
  }
}

module.exports = new EstudianteService();