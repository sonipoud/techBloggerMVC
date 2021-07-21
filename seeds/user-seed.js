const { User, Post } = require('../models');

const userdata = [
  {
    // id: 1,
    username: 'alesmonde0',
    email: 'nwestnedge0@gmail.com',
    password: 'p123'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;