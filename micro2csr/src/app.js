const express = require('express');
const app = express();

const response = {
    data:[],
    services:"All services",
    arquitecture:"notas"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})

//notas
app.get('/api/v1/notas',(req,res)=>{
    response.data.push("IDEstudiantes","nombre", "curso","horario","fecha","notapractica","notaTeoria","Promedio");
    return res.send(response);
})

module.exports = app;