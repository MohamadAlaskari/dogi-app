// profileModel.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('./dbConfig');

class Profile extends Model { }

Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    img: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    alt: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
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
    modelName: 'Profile',
    tableName: 'profile',
  }
);

module.exports = Profile;
