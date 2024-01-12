// import models
const User = require('./User.js');
const Posts = require('./Posts.js');
const Comment = require('./Comment.js');


//Users have many posts
User.hasMany(Posts, {
    foreignKey: 'user_id'
});

// Posts belong to users
Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

// Users have many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

// Posts have many comments
Posts.hasMany(Comment, {
    foreignKey: 'post_id'
})

module.exports = { User, Posts, Comment };