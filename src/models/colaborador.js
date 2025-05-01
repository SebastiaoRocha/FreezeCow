const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Colaborador extends sequelize.Model{}

Colaborador.init(
    {
        ID_Colaborador:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ID_FK_Unidade:
        {
            type: sequelize.INTEGER,
            allowNull: false    
        },
        nome_Colaborador:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        cargoColaborador:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        nivel_Acesso_Colaborador:
        {
            type: sequelize.INTEGER,
            allowNull: false
        },
        telefone_Colaborador:
        {
            type: sequelize.STRING
        }
    },
    {
        sequelize : database, modelName: 'Colaboradores', shema
    }
)

module.exports = Colaborador;
