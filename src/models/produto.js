const sequelize = require('sequelize');
const database = require('../db');
const shema = "";

class Produto extends sequelize.Model{}

Produto.init(
    {
        ID_Produto:
        {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ID_Unidade_FK:
        {
            type: sequelize.INTEGER,
            allowNull: false
        },
        Nome_Produto:
        {
            type: sequelize.STRING,
            allowNull: false
        },
        Qtd_Kilo_Produto:
        {
            type: sequelize.DECIMAL(6,3),
            allowNull: false
        },
        Num_Lote_Produto:
        {
            type: sequelize.INTEGER,
            allowNull: false
        },
        Data_Validade_Produto:
        {
            type: sequelize.DATE,
            allowNull: false
        },
        Liberado_Produto:
        {
            type: sequelize.INTEGER
        },
        Valor_Compra_Produto:
        {
            type: sequelize.DECIMAL(10,2),
            allowNull: false
        },
        Valor_Venda_Produto:
        {
            type: sequelize.DECIMAL(10,2),
            allowNull: false
        }
    },
    {
        sequelize: database, modelName: 'Produtos', shema, timestamps: false
    }
);

module.exports = Produto;
