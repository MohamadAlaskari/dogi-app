/*const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Users = require('./Users');


class Followers extends Model { }

Followers.init(
  {
    followerID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'userID',
      },
    },
    followerUserID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'userID',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    modelName: 'Followers',
    tableName: 'followers',
  }
);

// Beziehung zum Benutzer (User)
Followers.belongsTo(Users, { foreignKey: 'userID' });
Followers.belongsTo(Users, { foreignKey: 'followerUserID' });

module.exports = Followers;
*/
