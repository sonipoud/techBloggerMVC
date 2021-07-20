const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll(req.body)
        .then(dbPostData => res.json(dbPostData))
});

router.get('/:id', (req, res) => {
    Post.findOne({
        where: {
            id: req.params.id
        }
            .then(dbPostData => {
                res.json(dbPostData);
            })
    })
});

router.post('/', (req, res) => {
    Post.create(req.body)
        .then(dbPostData => res.json(dbPostData))
});

router.put('/:id', (req, res) => {
    Post.update(req.body,
        {
            where: {
                id: req.params.id
            }
        })
        .then(dbPostData => {
            res.json(dbPostData);
        })
});

router.delete('/:id', (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbPostData => {
            res.json(dbPostData);
        });
});

module.exports = router;