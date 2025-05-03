const express = require('express');
const controllerColaborador = require('./controllers/colaboradorController');
const controllerUnidade = require('./controllers/unidadeController');
const routes = express.Router();

// Rotas para classe Colaborador
routes.post('/CreateColaborador', controllerColaborador.CreateColaborador);
routes.get('/GetOneColaborador', controllerColaborador.GetOneColaborador);
routes.post('/UpdateColaborador', controllerColaborador.UpdateColaborador);
routes.post('/DeleteColaborador', controllerColaborador.DeleteColaborador);

// Rotas para classe Unidade
routes.post('/CreateUnidade', controllerUnidade.CreateUnidade);
routes.get('/GetOneUnidade', controllerUnidade.GetOneUnidade);
routes.post('/UpdateUnidade', controllerUnidade.UpdateUnidade);
routes.post('/DeleteUnidade', controllerUnidade.DeleteUnidade);

module.exports = routes;


