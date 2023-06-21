const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userSeeds');
const postsData = require('./postSeeds');
const commentsData = require('./commentSeeds');

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });


        const users = await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });
        console.log('***USERS SEEDED***');

        for (const { id } of users) {
            const userPosts = postsData
                .filter((post) => post.user_id === id)
                .map((post) => ({ ...post, user_id: id }));

            await Post.bulkCreate(userPosts);
        }
        console.log('***POST SEEDED***');

        for (const { id } of users) {
            const userComments = commentsData
                .filter((comment) => comment.user_id === id)
                .map((comment) => ({ ...comment, user_id: id }));

            await Comment.bulkCreate(userComments);
        }
        console.log('***COMMENTS SEEDED***');

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDatabase();