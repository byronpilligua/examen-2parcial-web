const {EstudianteService,
        FacultadService} = require('../services');

class EstudianteController{

  loginView(req, res){
    try {
      res.render('login');
    } catch (error) {
      res.json({error});
    }
  }

  async registroView(req, res){
    try {
      const data = await FacultadService.getAll();
      if(data.data){
        res.render('registro', {error:null, facultades: data.data});
      }
    } catch (error) {
      res.json({error});
    }
  }

  async registro(req, res){
    try {
      const data = await EstudianteService.create(req.body);
      if(data.error){
        const facultades = await FacultadService.getAll();
        res.render('registro', {error:data.error.message, facultades:facultades.data});
      }else{
        res.redirect('/estudiante/login');
      }
    } catch (error) {
      res.json({error});
    }
  }

  perfilView(req, res){
    try {
      res.render('perfil');
    } catch (error) {
      res.json({error});
    }
  }
}

module.exports = new EstudianteController();