const {ActividadService} = require('../services');

class ActividadController{

  async getAll(req, res){
    try {
      const data = await ActividadService.getAll();
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async get(req, res){
    try {
      const {id} = req.params;
      const data = await ActividadService.get(id);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async create(req, res){
    try {
      const {idFacultad} = req;
      req.body._facultad = idFacultad;
      const data = await ActividadService.create(req.body);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async update(req, res){
    try {
      const {id} = req.params;
      const data = await ActividadService.update(id, req.body);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async delete(req, res){
    try {
      const {id} = req.params;
      const data = await ActividadService.delete(id);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async actividadesPorFacultad(req, res){
    try {
      const {idFacultad} = req;
      const data = await ActividadService.actividadesPorFacultad(idFacultad);
      return res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async agregarEstudiante(req, res){
    try {
      const {id} = req.params;
      const {idEstudiante} = req.body;
      const data = await ActividadService.agregarEstudiante(id, idEstudiante);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }
}

module.exports = new ActividadController();