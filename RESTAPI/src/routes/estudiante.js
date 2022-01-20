const {Router} = require('express');
const {EstudianteController} = require('../controllers');

const router = Router();

router.get('/',EstudianteController.getAll);

router.get('/:id',EstudianteController.get);

router.patch('/:id', EstudianteController.update);

router.put('/:id', EstudianteController.updatePassword);

router.delete('/:id', EstudianteController.delete);

module.exports = router;