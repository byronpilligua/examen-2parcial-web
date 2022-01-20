const axios = require('axios').default;
const {API} = require('../config');

class FacultadService{

  async getAll(){
    const res = await axios({
      method:'GET',
      url:`${API}/actividad`
    });
    return res.data;
  }

  async agregarCurso(id, idEstudiante){
    const res = await axios({
      method:'PUT',
      url:`${API}/actividad/agregar-estudiante/${id}`,
      data:{
        idEstudiante
      }
    });
    return res.data;
  }
  
}

module.exports = new FacultadService();