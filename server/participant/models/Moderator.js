const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/db");

const Moderator = db.define(
  "Moderator",
  {
    modId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Moderator;
