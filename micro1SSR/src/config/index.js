if(process.env.NODE_ENV !== "production"){
  require('dotenv').config();
}

module.exports = {
  API: process.env.API,
  PORT: process.env.PORT,
  SECRET: process.env.SECRET
}