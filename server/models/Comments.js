/*const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/dbConfig')
const Posts = require('./Posts')


class Comments extends Model { }

Comments.init(
  {
    commentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Post',
        key: 'postID',
      },
    },
    userID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'userID',
      },
    },
    text: {
      type: DataTypes.STRING
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
    modelName: 'Comments',
    tableName: 'comments',
  }
);

// Beziehung zum Beitrag (Post)
Comments.belongsTo(Posts, { foreignKey: 'postID' });

module.exports = Comments;
*/
