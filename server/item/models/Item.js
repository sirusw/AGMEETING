const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../config/db");

const Item = db.define(
  "item",
  {
    meetingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    issueNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filepath: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    voteFor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    voteAgainst: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    abstain: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

console.log(Item === db.models.Item);

module.exports = Item;
