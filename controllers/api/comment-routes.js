const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
  Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
});

router.post('/', (req, res) => {
    Comment.create(req.body)
      .then(dbCommentData => res.json(dbCommentData))
});

router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {
      if (!dbCommentData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbCommentData)
    });
});

module.exports = router;