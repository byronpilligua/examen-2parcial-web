const express = require('express');
const morgan = require('morgan');
const engine = require('ejs-mate');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const path = require ('path');
const {PORT, SECRET} = require('./config');

const app = express();
require('./passport/local-auth');

//Configuracion
app.set('port',PORT);
app.engine('ejs',engine);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(morgan('dev'));
app.use(session({
  secret: SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next)=>{
  app.locals.error = req.flash('error');
  app.locals.user = req.user;
  next();
});

//Rutas
const {EstudianteRoute, ActividadRoute} = require('./routes');
app.use('/estudiante',EstudianteRoute);
app.use('/estudiante',ActividadRoute);

app.get('/',(req, res)=>{
  res.send('okkkk')
})

app.listen(app.get('port'),()=>{
  console.log(`Server corriendo en el puerto ${PORT}`);
});