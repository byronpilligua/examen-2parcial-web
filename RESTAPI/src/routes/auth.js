const {Router} = require('express');
const {AuthController} = require('../controllers');

const router = Router();

router.post('/signin-facultad',AuthController.signinFacultad);

router.post('/signup-facultad',AuthController.signupFacultad);

router.post('/signin-estudiante',AuthController.signinEstudiante);

router.post('/signup-estudiante',AuthController.signupEstudiante);

module.exports = router;