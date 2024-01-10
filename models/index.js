// import models
const User = require('./User');
const Posts = require('./Posts');
const Comment = require('./Comment');


//Users have many posts
User.hasMany(Posts, {
    foreignKey: 'user_id'
});

// Posts belong to users
Posts.belongsTo(User, {
    foreignKey: 'user_id'
});

// Posts have many comments
Posts.hasMany(Comment, {
    foreignKey: 'post_id'
})
// Users have many comments
User.hasMany(comment, {
    foreignKey: 'user_id'
})
module.exports = { User, Posts, Comment };