const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require();

const agenda = Sequelize.define('agenda', 
{
    id:{ type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    meeting_id:{type: DataTypes.STRING, references: { model: meeting, key:'id' }},
    item_name: {type: DataTypes.STRING},
    file_loc:{type: DataTypes.STRING},
    description:{type: DataTypes.STRING},
    vote_for:{type: DataTypes.INTEGER},
    vote_against:{type: DataTypes.INTEGER},
    abstain:{type: DataTypes.INTEGER}
});
