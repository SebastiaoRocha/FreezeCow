const express = require('express');
const controllerColaborador = require('./controllers/colaboradorController');

const routes = express.Router();

// Rotas para classe Colaborador
routes.post('/CreateColaborador', controllerColaborador.CreateColaborador);
routes.get('/GetOneColaborador', controllerColaborador.GetOneColaborador);
routes.post('/UpdateColaborador', controllerColaborador.UpdateColaborador);
routes.post('/DeleteColaborador', controllerColaborador.DeleteColaborador);

module.exports = routes;


