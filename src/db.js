const sequelize = require('sequelize');

const database = new sequelize('freezeCow', 'userteste', 'positivo3221', {
        host: 'fe80::a16d:5c15:f42d:4690',
        port: 1433,
        dialect:'mssql'
    });
database.sync();

module.exports = database;
