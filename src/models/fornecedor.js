const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Fornecedor extends sequelize.Model{}

Fornecedor.init(
    {
        ID_Fornecedor:
        {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Nome_Fornecedor:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        CNPJ_Fornecedor:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        Endereco_Fornecedor:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        Telefone_Fornecedor:
        {
            type: sequelize.STRING,
            allowNull: false
        }
    },
    {
        sequelize: database, modelName: 'Fornecedores', shema, timestamps: false
    }
);

module.exports = Fornecedor;
