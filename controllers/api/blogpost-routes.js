// to do - update dish attributes to blog post attributes

const router = require('express').Router();
const Posts = require('../../models/Posts');

// route to create/add a blog post using async/await
router.post('/', async (req, res) => {
  try { 
    const postData = await Posts.create({
    dish_name: req.body.dish_name,
    description: req.body.description,
    guest_name: req.body.guest_name,
    has_nuts: req.body.has_nuts,
  });
  // if the blog post is successfully created, the new response will be returned as json
  res.status(200).json(postData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;