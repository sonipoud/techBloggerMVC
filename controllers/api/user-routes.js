const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll(req.body)
        .then(dbUserData => res.json(dbUserData))
});

router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
    })
        .then(dbUserData => {
            res.json(dbUserData);
        })
});

router.post('/', (req, res) => {
    User.create(req.body)
        .then(dbUserData => {
            res.json(dbUserData);
        });
})
});

router.put('/:id', (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            res.json(dbUserData);
        })
});

router.delete('/:id', (req, res) => {
    User.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbUserData => {
            res.json(dbUserData);
        })
});

module.exports = router;