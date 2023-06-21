const { user } = require('../models');

const userData = [
    {
        username: "root",
        password: "root012"
    },
    {
        username: "ZeroCool",
        password: "ultimatevirus123"
    },
    {
        username: "CrashOveride",
        password: "ilovekate234"
    },
    {
        username: "AcidBurn",
        password: "ilovedade345"
    },
];

const seedUsersData = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsersData;