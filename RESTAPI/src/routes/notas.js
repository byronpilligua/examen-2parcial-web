const {Router} = require('express');
const {notasController} = require('../controllers');
const {verificarToken} = require('../middlewares');
const router = Router();

router.get('/',notasController.getAll);

router.get('/get',
  verificarToken,
  notasController.get
);

router.patch('/',
  verificarToken,
  notasController.update
);

router.put('/',
  verificarToken,
  notasController.updatePassword
);

router.delete('/',
  verificarToken,
  notasController.delete
);

module.exports = router;