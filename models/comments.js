const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require();

const commentsAndMessage = Sequelize.define('commentsAndMessage', 
{
    id:{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    title:{type: DataTypes.STRING},
    sender_id: {type: DataTypes.INTEGER},
    date_create:{type: DataTypes.DATE},
    text:{type: DataTypes.STRING},
    receiver_id:{type: DataTypes.INTEGER, references: { model: client, key:'id' }}

});
