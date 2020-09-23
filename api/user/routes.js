const {Router} = require('express');
const router = Router();
const user = require('./services');

// Hacer render de registro de usuario y registrar usuario
router.get('/inmuebles/create', user.renderSignUpForm);
router.post('/inmuebles/create', user.singup);

// hacer render de login y validar en bd
router.get('/login', user.renderSingInForm);
router.post('/login', user.singin);

// Logout
router.get('/logout', user.logout)


module.exports = router;
