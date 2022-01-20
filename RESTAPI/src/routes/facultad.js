const {Router} = require('express');
const {FacultadController} = require('../controllers');
const {verificarToken} = require('../middlewares');
const router = Router();

router.get('/',FacultadController.getAll);

router.get('/get',
  verificarToken,
  FacultadController.get
);

router.patch('/',
  verificarToken,
  FacultadController.update
);

router.put('/',
  verificarToken,
  FacultadController.updatePassword
);

router.delete('/',
  verificarToken,
  FacultadController.delete
);

module.exports = router;