const { Router } = require('express');
const router = Router();
const rutasInmuebles = require('./service');
const isAuth = require('../../utils/auth');

// new inmueble
router.get('/misinmuebles/inmuebles/create', isAuth.isAuthenticated, rutasInmuebles.renderForm);
router.post('/misinmuebles/new', isAuth.isAuthenticated, rutasInmuebles.createNewInmueble);

// get all inmuebles
router.get('/misinmuebles', isAuth.isAuthenticated, rutasInmuebles.renderInmuebles);

// edit inmuebles
router.get('/misinmuebles/inmuebles/edit/:inmuebleId', isAuth.isAuthenticated, rutasInmuebles.renderEditForm);
router.put('/misinmuebles/inmuebles/edit/:inmuebleId', isAuth.isAuthenticated, rutasInmuebles.updateInmueble);

router.get('/inmuebles/:inmuebleId', rutasInmuebles.renderInmueble);

module.exports = router;
