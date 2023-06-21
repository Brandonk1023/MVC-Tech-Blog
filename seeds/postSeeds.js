const { post } = require('../models');

const postData = [
    {
        title:'How to find a Gibson',
        content:'This is how to find a gibson computer.',
        userId:1,
    },
    {
        title:'The meaning of the rainbow books',
        content:'This is the meaning of the rainbow books.',
        userId:1,
    },
    {
        title:'Why floppy disk make good ninja stars ',
        content:'Floppy disk have sharp corners',
        userId:2,
    },
    {
        title:'The legend of the pool on the roof',
        content:'There is no pool on the roof',
        userId:2,
    },
    {
        title:'How to type like you mean it',
        content:'To become a better typist you must practice',
        userId:3,
    },
    {
        title:'How to take over a TV network',
        content:'You must be elite',
        userId:3,
    },

];

const seedPostData = () => Post.bulkCreate(postData);

module.exports = seedPostData;