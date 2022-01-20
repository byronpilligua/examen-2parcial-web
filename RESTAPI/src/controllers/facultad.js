const { FacultadService } = require('../services');

class FacultadController{

  async getAll(req, res){
    try {
      const data = await FacultadService.getAll();
      res.json({data});
    } catch (error) {
      res.json({error})
    }
  }

  async get(req, res){
    try {
      const {idFacultad} = req;
      const data = await FacultadService.get(idFacultad);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async update(req, res){
    try {
      const {idFacultad} = req;
      const data = await FacultadService.update(idFacultad,req.body);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async updatePassword(req, res){
    try {
      const {idFacultad} = req;
      const data = await FacultadService.updatePassword(idFacultad,req.body);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async delete(req, res){
    try {
      const {idFacultad} = req;
      const data = await FacultadService.delete(idFacultad);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }
}

module.exports = new FacultadController();