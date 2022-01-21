const {Router}= require('express');
const router = Router();
const {NotaController}= require('../controllers');

router.get('/', NotaController.getAll);

router.post('/add',NotaController.add);

router.put('/update/:nota_id',NotaController.update);

router.delete('/delete/:nota_id',NotaController.delete);

router.get('/:nota_id',NotaController.getOne);


module.exports= router