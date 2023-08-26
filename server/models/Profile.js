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
    name: {
      type: DataTypes.STRING,
    },
    alt: {
      type: DataTypes.INTEGER,
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
