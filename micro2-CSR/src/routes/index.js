// core
const express = require('express');

// terceros
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('express-async-errors')

// propios
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

// nivel 0
module.exports = function ({ notasRoutes}) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression());

  
    apiRoutes.use('/notas', BebidaRoutes); 
    
    

    router.use('/api/v1', apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
}
