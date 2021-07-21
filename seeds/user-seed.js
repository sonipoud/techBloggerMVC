const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde0',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;