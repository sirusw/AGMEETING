const { Sequelize } = require('sequelize');

module.exports = new Sequelize('AGMEETING', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});