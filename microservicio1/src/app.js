const express = require('express');
const app = express();

const response = {
    data:[],
    services:"Matriculas Service",
    arquitecture:"Microservices"
};

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v1/pc",(req,res)=>{
    response.data.push("identificacion","nombre","curso","horario","fecha","estado",);
    console.log(`Get matriculas maintenance data`)
    return res.send(response);
})


module.exports =  app;