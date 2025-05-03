const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Unidade extends sequelize.Model{}

Unidade.init(
    {  
        ID_Unidade:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Nome_Unidade:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        Cidade_Unidade:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        Endereco_Unidade:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        Telefone_Unidade:
        {
            type: sequelize.STRING
        }
    },
    {
        sequelize: database, modelName: 'Unidades', shema, timestamps: false
    }
)

module.exports = Unidade;
