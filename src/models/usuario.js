const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Usuario extends sequelize.Model{}

Usuario.init(
    {
        id:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        email:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        nivel:
        {
            type: sequelize.INTEGER,
            allowNull: false
        },
        cargo:
        {
            type: sequelize.STRING,
            allowNull: true
        }
    },
    {
        sequelize : database, modelName: 'Usuarios', shema
    }
)

module.exports = Usuario;
