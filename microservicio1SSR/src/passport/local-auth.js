const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {EstudianteService} = require('../services');

passport.serializeUser((user, done)=>{
  done(null, user._id);
});

passport.deserializeUser(async(id, done)=>{
  const user = await EstudianteService.get(id);
  done(null, user.data);
});

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) =>{
  const data = await EstudianteService.login({email,password});
  if(data.error){
    done(null, false, req.flash('error',data.error.message));
  }else{
    const estudiante = data.data;
    done(null, estudiante);
  }
}));