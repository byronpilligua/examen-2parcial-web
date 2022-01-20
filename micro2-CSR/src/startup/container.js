const { createContainer, asClass, asValue, asFunction } = require('awilix');

const config = require('../config');
const app = require('./index');

// importar servicios
const { notasService } = require('../services');

// importar controladores
const { notasController} = require('../controllers');

// importar rutas
const Routes = require('../routes')
const { notasRoutes} = require('../routes/index.routes');

// models
const { notasModel } = require('../models');

// repositorios
const { UserRepository, BebidaRepository, PizzaRepository  } = require('../repositories');


const container = createContainer();
container
    .register(
        {
            app: asClass(app),
            router: asFunction(Routes).singleton(),
            config: asValue(config)
        }
    )
    .register(
        {
       
            notasService: asClass(notasService).singleton(),
          
        }
    ).register(
        {
            
            notasController: asClass(notasController.bind(notasController)).singleton(),
           
        }
    ).register(
        {
            
            notasRoutes: asFunction(notasRoutes).singleton(),
          
        }
    ).register(
        {
        
            notas: asValue(notasModel),
       
        
        }
    ).register(
        {
 
            notasRepository: asClass(notasRepository).singleton(),

        }
    )


module.exports = container;