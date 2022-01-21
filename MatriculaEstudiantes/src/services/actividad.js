const ActividadModel = require('../models/actividad');
const moment = require('moment');

const darBajaActividades = async()=>{
  console.log(`Fecha ejecucion: ${new Date().toLocaleString()}`);
  const actividades = await ActividadModel.find({estado: true});
  const lista = actividades.filter(i=>{
    if(i.cupos == i.estudiantes.length){
      return i
    }
    const fechaActual = moment();
    const fechaLimite = moment(i.fechaLimite);
    if(fechaActual.isAfter(fechaLimite)){
      return i;
    }
  });
  
  for (const i in lista) {
    await ActividadModel.findByIdAndUpdate(lista[i]._id,{estado: false});
  }

  console.log(`Se dieron de baja ${lista.length} actividades`);
}

module.exports = darBajaActividades