const server = require("./src/app");


server.listen(process.env.PORT,()=>{
    console.log(`Matriculas service run...`)
})