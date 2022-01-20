const axios = require('axios').default;
const {API} = require('../config');

class FacultadService{

  async getAll(){
    const res = await axios({
      method:'GET',
      url:`${API}/facultad`
    });
    return res.data;
  }
  
}

module.exports = new FacultadService();