const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Friends = require('./Friends').default
const Followers = require('./Followers');
const Posts = require('./Posts')

class Users extends Model { }

Users.init(
  {
    userID: {
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
    mobilnumber: {
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
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
  }
);

/*
// Beziehung zu Freunden (Friends)
Users.hasMany(Friends, { foreignKey: 'userID' });

// Beziehung zu Follower (Followers)
Users.hasMany(Followers, { foreignKey: 'userID' });

// Beziehung zu Beiträgen (Posts)
Users.hasMany(Posts, { foreignKey: 'userID' });
*/
module.exports = Users;
