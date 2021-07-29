const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
  Comment.findAll({})
    .then(dbCommentData => res.json(dbCommentData))
});

router.get('/:id', (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => res.json(dbCommentData))
});

router.post('/', withAuth, (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    post_id: req.body.post_id,
    user_id: req.session.user_id,
  })
    .then(dbCommentData => res.json(dbCommentData))
});

router.put('/:id', withAuth, (req, res) => {
  Comment.update(
    {
      comment_text: req.body.comment_text
    },
    {
      where: {
        id: req.params.id
      }
    }).then(dbCommentData => {
      res.json(dbCommentData);
    })
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbCommentData => {res.json(dbCommentData)
    });
});

module.exports = router;