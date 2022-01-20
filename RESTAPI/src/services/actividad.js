const {ActividadModel, EstudianteModel} = require('../models');

class ActividadService{
  async getAll(){
    return await ActividadModel.find();
  };

  async get(id){
    if(!id){
      const error = new Error();
      error.status = 401;
      error.message = 'Debe enviar el id!'
      throw error;
    }
    return await ActividadModel.findById(id);
  };

  async create(entity){
    if(!entity.titulo){
      const error = new Error();
      error.status = 401;
      error.message = 'Debe enviar el titulo!'
      throw error;
    }

    if(!entity.descripcion){
      const error = new Error();
      error.status = 401;
      error.message = 'Debe enviar la descripción!'
      throw error;
    }

    if(!entity.fechaLimite){
      const error = new Error();
      error.status = 401;
      error.message = 'Debe enviar la fecha límite!'
      throw error;
    }

    if(!entity.cupos){
      const error = new Error();
      error.status = 401;
      error.message = 'Debe la cantidad de cupos disponibles!'
      throw error;
    }

    if(parseInt(entity.cupos) < 5 || parseInt(entity.cupos) > 35){
      const error = new Error();
      error.status = 401;
      error.message = 'El rango de cupos es 5-35!'
      throw error;
    }

    return await ActividadModel.create(entity);
  }

  async update(id, entity){
    if(!id){
      const error = new Error();
      error.status = 401;
      error.message = 'Debe enviar el id!'
      throw error;
    }

    await ActividadModel.findByIdAndUpdate(id, entity);
    return await ActividadModel.findById(id);
  }

  async delete(id){
    if(!id){
      const error = new Error();
      error.status = 401;
      error.message = 'Debe enviar el id!'
      throw error;
    }

    return await ActividadModel.findByIdAndDelete(id);
  }

  async actividadesPorFacultad(idFacultad){
    if(!idFacultad){
      const error = new Error();
      error.status = 401;
      error.message = 'Debe enviar el id de la facultad!'
      throw error;
    }

    return await ActividadModel.find({_facultad: idFacultad});
  };

  async agregarEstudiante(id, idEstudiante){
    const estudiante = await EstudianteModel.findById(idEstudiante);
    if(!estudiante){
      const error = new Error();
      error.status = 400;
      error.message = "El id del estudiante no existe";
    }

    const actividad = await ActividadModel.findById(id);
    if(actividad.estudiantes.length == actividad.cupos){
      const error = new Error();
      error.status = 401;
      error.message = `Los cupos estan agotados, el limite es ${actividad.cupos}`;
      throw error;
    }
    actividad.estudiantes.push(idEstudiante);
    return await actividad.save();
  }
}

module.exports = new ActividadService();