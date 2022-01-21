const express= require('express');
const morgan = require('morgan');
const path = require ('path');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const {MONGO_URI, PORT}= require('./config');

mongoose.connect (MONGO_URI,{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false});

app.set('port', PORT);

app.use(cors());

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

app.use(express.json());


app.use(express.static(path.join(__dirname,'public')));

const {MatriculaRoute, NotaRoute}= require('./routes');

app.use('/matriculas',MatriculaRoute);
app.use('/notas',NotaRoute);

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});