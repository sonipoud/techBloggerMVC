const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

// get all users
router.get('/', (req, res) => {
    User.findAll({})
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
            req.session.save(() => {
                req.session.user_id = dbUserData.id;
                req.session.username = dbUserData.username;
                req.session.loggedIn = true;

                res.json(dbUserData);
            });
        });
});

router.post('/login', (req, res) => {
    // expects {email: 'lernantino@gmail.com', password: 'password1234'}
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(dbUserData => {
      const validPassword = dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect password!' });
        return;
      }
      req.session.save(() => {
        // declare session variables
        req.session.user_id = dbUserData.id;
        req.session.username = dbUserData.username;
        req.session.loggedIn = true;
  
        res.json({ user: dbUserData, message: 'You are now logged in!' });
      });
    });
  });

  router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
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