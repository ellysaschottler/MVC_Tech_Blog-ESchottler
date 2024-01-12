const router = require('express').Router();
const Posts = require('../../models/Posts');
const withAuth = require('../../utils/authorization')

// route to create/add a blog post using async/await - takes in the data from the new_post handlebar's form
router.post('/api/newpost', withAuth, async (req, res) => {
  try { 
    const postData = await Posts.create({
        user_id: req.session.user_id,
        post_title: req.body.dish_name,
        post_content: req.body.description,
  });
  res.status(200).json(postData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;