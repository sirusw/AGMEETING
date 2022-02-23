const { Sequelize, DataTypes } = require("sequelize");
const db = require("../../config/db");

const Administrator = db.define(
  "Administrator",
  {
    adminId: {
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

module.exports = Administrator;
