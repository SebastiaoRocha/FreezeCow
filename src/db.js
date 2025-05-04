const sequelize = require('sequelize');

const database = new sequelize('freezeCow', 'userteste', 'positivo3221', {
        host: 'fe80::5add:dd3e:2952:b319',
        port: 1433,
        dialect:'mssql'
    });
database.sync();

module.exports = database;
