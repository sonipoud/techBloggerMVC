const router = require('express').Router();
const apiRoutes = require('./api');

const homeRoutes = require('./home-routes.js');
const loginRoutes = require('./login-routes.js');
const logoutRoutes = require('./logout-routes.js');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/logout', logoutRoutes);

router.use('/api', apiRoutes);

module.exports = router;