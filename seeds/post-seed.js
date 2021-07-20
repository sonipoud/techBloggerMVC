const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Morbi non quam',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;