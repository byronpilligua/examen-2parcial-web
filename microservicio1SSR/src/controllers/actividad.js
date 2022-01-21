const {ActividadService} = require('../services');

class ActividadController{

  async dashboardView(req, res){
    try {
      const data = await ActividadService.getAll();
      res.render('dashboard',{actividades: data.data});
    } catch (error) {
      res.json({error});
    }
  }

  async agregarCurso(req, res){
    try { 
      const {id, idEstudiante} = req.params;
      await ActividadService.agregarCurso(id, idEstudiante);
      res.redirect('/estudiante/dashboard')
    } catch (error) {
      res.json({error});
    }
  }
}

module.exports = new ActividadController();