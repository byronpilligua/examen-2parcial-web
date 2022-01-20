const {AuthService} = require('../services');

class AuthController{

    async signupFacultad(req, res){
      try {
        const data = await AuthService.signupFacultad(req.body);
        res.json({data});
      } catch (error) {
        res.json({error});
      }
    }

    async signupEstudiante(req, res){
      try {
        const data = await AuthService.signupEstudiante(req.body);
        res.json({data});
      } catch (error) {
        res.json({error});
      }
    }

    async signinFacultad(req, res){
      try {
        const data = await AuthService.signinFacultad(req.body);
        res.json({data});
      } catch (error) {
        res.json({error});
      }
    }

    async signinEstudiante(req, res){
      try {
        const data = await AuthService.signinEstudiante(req.body);
        res.json({data});
      } catch (error) {
        res.json({error});
      }
    }
}

module.exports = new AuthController();