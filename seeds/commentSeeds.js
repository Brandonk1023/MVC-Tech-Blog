const { comment } = require('../models');

const commentData = [
    {
        content:'This was a very informative post.',
        userId:2,
        postId:1,

    },
    {
        content:'I really enjoyed this post',
        userId:3,
        postId:2,

    },
    {
        content:'This was great content',
        userId:4,
        postId:3,

    },

]

const seedCommentData = () => Comment.bulkCreate(commentData);

module.exports = seedCommentData;