const {EstudianteService} = require('../services');

class EstudianteController{

  async getAll(req, res){
    try {
      const data = await NotasService.getAll();
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async get(req, res){
    try {
      const {id} = req.params;
      const data = await NotasService.get(id);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async update(req, res){
    try {
      const {id} = req.params;
      const data = await NotasService.update(id, req.body);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async updatePassword(req, res){
    try {
      const {id} = req.params;
      const data = await NotasService.updatePassword(id, req.body);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }

  async delete(req, res){
    try {
      const {id} = req.params;
      const data = await NotasService.delete(id);
      res.json({data});
    } catch (error) {
      res.json({error});
    }
  }
}

module.exports = new NotasController();