const axios = require('axios').default;
const {API} = require('../config');

class EstudianteService{

  async get(id){
    const res = await axios({
      method:'GET',
      url:`${API}/estudiante/${id}`,
    });
    return res.data;
  }

  async create(entity){
    const res = await axios({
      method:'POST',
      url:`${API}/auth/signup-estudiante`,
      data:entity
    });
    return res.data;
  }

  async login(entity){
    const res = await axios({
      method:'POST',
      url:`${API}/auth/signin-estudiante`,
      data:entity
    });
    return res.data;
  }
}

module.exports = new EstudianteService();