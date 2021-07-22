const router = require('express').Router();
const sequelize = require('../config/connection');

// logged in 
router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

//sign up
router.get('/', (req, res) => {
    res.render('signup');
})

module.exports = router;
