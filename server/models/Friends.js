/*const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/dbConfig')
const Users = require('./Users');


class Friends extends Model { }

Friends.init(
  {
    friendID: {
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
    friendUserID: {
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
    modelName: 'Friends',
    tableName: 'friends',
  }
);

// Beziehung zum Benutzer (User)
Friends.belongsTo(Users, { foreignKey: 'userID' });
Friends.belongsTo(Users, { foreignKey: 'friendUserID' });

module.exports = Friends;
*/
