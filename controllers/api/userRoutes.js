
// router.get('/', async (req, res) => {
//     res.render('blog_post', { blog_post });
//   });

const router = require('express').Router();
const { User } = require('../../models');

// Create new user
router.post('/', async (req, res) => {
  try {
      const userData = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
      });
      req.session.save(() => {
          req.session.logged_in = true;
          res.status(200).json(userData);
      });
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});



//login
router.post('/login', async (req, res) => {
  try {

    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please enter a valid email and password' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please enter a valid email and password' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true; 
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


// logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;