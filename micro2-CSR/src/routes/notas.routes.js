const { Router } = require('express');

module.exports = function ({ notasController }) {
    const router = Router();
    router.get('/:notasId', notasController.get);
    router.get('', notasController.getAll);
    router.post('/', notasController.create);
    router.patch('/:notasId', notasController.update);
    router.delete('/:notasId', notasController.delete);

    return router;
}
