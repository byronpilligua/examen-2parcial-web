const {Router} = require('express');
const passport = require('passport');
const {autenticado} = require('../middlewares');
const {EstudianteController} = require('../controllers');

const router = Router();

router.get('/login', EstudianteController.loginView);

router.get('/registro', EstudianteController.registroView);

router.post('/login', passport.authenticate('local-login',{
  successRedirect: '/estudiante/dashboard',
  failureRedirect: '/estudiante/login',
  passReqToCallback: true
}));

router.post('/registro', EstudianteController.registro);

router.get('/salir',(req, res)=>{
  req.logout();
  res.redirect('/estudiante/login')
})

router.get('/perfil', 
  autenticado,
  EstudianteController.perfilView);

module.exports = router;