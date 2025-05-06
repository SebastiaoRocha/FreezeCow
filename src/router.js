const express = require('express');
const controllerColaborador = require('./controllers/colaboradorController');
const controllerUnidade = require('./controllers/unidadeController');
const controllerCliente = require('./controllers/clienteController');
const controllerFornecedor = require('./controllers/fornecedorController');

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

// Rotas para classe Cliente
routes.post('/CreateCliente', controllerCliente.CreateCliente);
routes.get('/GetOneCliente', controllerCliente.GetOneCliente);
routes.post('/UpdateCliente', controllerCliente.UpdateCliente);
routes.post('/DeleteCliente', controllerCliente.DeleteCliente);

// Rotas para classe Fornecedor
routes.post('/CreateFornecedor', controllerFornecedor.CreateFornecedor);
routes.get('/GetOneFornecedor', controllerFornecedor.GetOneFornecedor);
routes.post('/UpdateFornecedor', controllerFornecedor.UpdateFornecedor);
routes.post('/Deletefornecedor', controllerFornecedor.DeleteFornecedor);

module.exports = routes;


