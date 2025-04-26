const sequelize = require('sequelize');

const database = new sequelize('BdTeste', 'userteste', 'positivo3221', {
        host: '10.0.0.193',
        dialect:'mssql'
    });
database.sync();

module.exports = database;
