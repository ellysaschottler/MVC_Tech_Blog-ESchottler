const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    comment_date: {
        type: DataTypes.DATE,
    },
    user_id: {
      type: DataTypes.INTEGER,
      ALLOWnULL: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
        type: DataTypes.INTEGER,
        ALLOWnULL: false,
        references: {
          model: 'posts',
          key: 'id'
        }
      }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;