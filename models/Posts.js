const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Posts extends Model {}

Posts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    post_date: {
        type: DataTypes.DATE,
    },
    user_id: {
      type: DataTypes.INTEGER,
      ALLOWnULL: false,
      references: {
        model: 'user',
        key: 'id'
      }
    }

  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'posts',
  }
);

module.exports = Posts;