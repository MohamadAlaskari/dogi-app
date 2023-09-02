const { Model, DataTypes } = require('sequelize')
const sequelize = require('./../config/dbConfig')
const User = require('./Users');

class Posts extends Model { }

Posts.init({
  postID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userID: {
    type: DataTypes.INTEGER,
    references: {
      model: User, // Das ist das Usermodell
      key: 'userID', // Das ist der Primärschlüssel der Usertabelle, auf den der Fremdschlüssel verweist
    }
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  discription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  likes: {
    type: DataTypes.INTEGER,
    defaultValue: 0,

  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  sequelize,
  modelName: 'Posts',
  tableName: 'posts'
})

// Beziehungsdefinition zwischen Posts und User (optional)
Posts.belongsTo(User, { foreignKey: 'userID' });

module.exports = Posts;
