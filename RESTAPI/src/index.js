const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const {MONGO_URI, PORT} = require('./config')

const app = express();

//BD conexion
mongoose.connect(MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("BD conectada");
}).catch(error=>{
  console.log(error);
});

//Configuracion
app.set('port',PORT);
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
const {FacultadRoute, 
       AuthRoute, 
       ActividadRoute,
       EstudianteRoute} = require('./routes');

app.use('/api/facultad', FacultadRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/actividad', ActividadRoute);
app.use('/api/estudiante', EstudianteRoute);


//Correr server
app.listen(app.get('port'),()=>{
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});