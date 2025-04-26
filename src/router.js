const express = require('express');
const controllerUsuario = require('./controllers/UsuarioController');

const routes = express.Router();

routes.get('/List', controllerUsuario.List);

routes.post('/Create', controllerUsuario.Create);

routes.post('/Update', controllerUsuario.Update);

routes.get('/GetOne', controllerUsuario.GetOne);

routes.post('/Delete', controllerUsuario.Delete);

module.exports = routes;


