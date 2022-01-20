const jwt = require('jsonwebtoken');
const { FacultadModel } = require('../models');
const {SECRET} = require('../config');

const verificarToken = async(req, res, next)=>{
  try{
    const token = req.headers['x-access-token'];
    if(!token){
      const error = new Error();
      error.status = 401;
      error.message = 'El token es invalido'
      return res.json({ error });
    }

    const desencriptado = jwt.verify(token, SECRET);
    
    const facultad = await FacultadModel.findById(desencriptado.id);
    if(!facultad){
      const error = new Error();
      error.status = 401;
      error.message = 'El id de la facultad no existe'
      return res.json({ error });
    }

    req.idFacultad = desencriptado.id;
    next();
  }catch(error){
    return res.json({error});
  }
};

module.exports = verificarToken;