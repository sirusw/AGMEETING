const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('./database');

const meeting = Sequelize.define('meeting', 
{
    id:{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    mod_id:{type: DataTypes.INTEGER, references: { model: client, key:'id'}},
    admin_id: {type: DataTypes.INTEGER, references: { model: client, key:'id'}},
    time_start:{type: DataTypes.DATE},

});
