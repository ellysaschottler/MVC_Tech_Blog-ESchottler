const router = require('express').Router();




router.get('/', async (req, res) => {
    res.render('blog_post', { blog_post });
  });



module.exports = router;