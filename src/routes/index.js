const { Router } = require('express');
const usersController = require('./users/');
const tipoUsuarioController = require('./tipoUsuario/');

const routes = Router();


routes.use('/users', usersController);
routes.use('/tipo-usuario', tipoUsuarioController);

module.exports = routes;
