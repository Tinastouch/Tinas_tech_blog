const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Post.HasMany(Comment, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Post.belongTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Comment,
    Post
};