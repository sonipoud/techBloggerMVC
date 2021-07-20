const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seed');
const seedUsers = require('./user-seed');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('Database Synced');

    await seedUsers();
    console.log('Users SEEDED');
  
    await seedPosts();
    console.log('Posts SEEDED');
  
    await seedComments();
    console.log('Comments SEEDED');

    process.exit(0);
  };
  
  seedAll();
  