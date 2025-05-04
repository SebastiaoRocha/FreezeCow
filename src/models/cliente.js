const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Cliente extends sequelize.Model{}

Cliente.init(
    {
        ID_Cliente:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ID_FK_Unidade:
        {
            type: sequelize.INTEGER,
            allowNull: false
        },
        nome_Cliente:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        cpf_Cliente:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        endereco_Cliente:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        telefone_Cliente:
        {
            type: sequelize.STRING
        }
    },
    {
        sequelize: database, modelName: 'Clientes', shema, timestamps: false 
    }
);

module.exports = Cliente;