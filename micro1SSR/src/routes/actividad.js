const {Router} = require('express');
const passport = require('passport');
const {autenticado} = require('../middlewares');
const {ActividadController} = require('../controllers');

const router = Router();

router.use(autenticado);

router.get('/dashboard',ActividadController.dashboardView);

router.get('/agregar/:id&:idEstudiante', ActividadController.agregarCurso)

module.exports = router;