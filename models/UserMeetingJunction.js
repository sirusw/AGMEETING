const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require();

const userMeetingJunction = Sequelize.define('userMeetingJunction', 
{
    meeting_id:{ type: DataTypes.INTEGER, references: { model: meeting, key:'id'}},
    user_id:{type: DataTypes.INTEGER, references: { model: meeting, key:'id'}}

});
