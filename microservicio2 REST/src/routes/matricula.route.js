const {Router}= require('express');
const router = Router();
const {MatriculaController}= require('../controllers');

router.post('/filtrar', MatriculaController.filtrar);

module.exports= router