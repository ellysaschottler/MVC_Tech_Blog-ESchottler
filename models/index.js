const User = require('./User');
const Posts = require('./Posts');


//Users have many posts
User.hasMany(Posts, {
    foreignKey: 'user_id',
});

// Posts belong to users
Posts.belongsTo(User, {
    foreignKey: 'user_id'
});



module.exports = { User };