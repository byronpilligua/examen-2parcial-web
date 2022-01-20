const express = require('express');
const app = express();

const response = {
    data:[],
    services:"notas Service 2",
    arquitecture:"Microservices 2"
};

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/pc",(req,res)=>{
    response.data.push("IDEstudiantes","nombre", "curso","horario","fecha","notapractica","notaTeoria","Promedio");
    console.log(`Get notas maintenance data`)
    return res.send(response);
})


module.exports =  app;