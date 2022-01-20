const {Router} = require('express');
const {ActividadController} = require('../controllers');
const {verificarToken} = require('../middlewares');
const router = Router();

router.get('/', 
  ActividadController.getAll
);

router.get('/:id',ActividadController.get);

router.post('/', 
  verificarToken,
  ActividadController.create
);

router.patch('/:id',ActividadController.update);

router.delete('/:id',ActividadController.delete);

router.put('/',
  verificarToken,
  ActividadController.actividadesPorFacultad
);

router.put('/agregar-estudiante/:id',ActividadController.agregarEstudiante);

module.exports = router;