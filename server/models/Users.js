// profileModel.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Users extends Model { }

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    img: {
      type: DataTypes.STRING,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: true

    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mobielnumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    alt: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    }
  },
  {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
  }
);

module.exports = Users;
