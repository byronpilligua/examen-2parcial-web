const cron = require('node-cron');
const mongoose = require('mongoose');
const darBajaActividades = require('./services/actividad');
const {MONGO_URI} = require('./config');


//BD conexion
mongoose.connect(MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("BD conectada");
}).catch(error=>{
  console.log(error);
});


cron.schedule('*/2 * * * *',async()=>{
  darBajaActividades();
});

