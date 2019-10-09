//import express
const express = require('express');
// execute router 
const router = express.Router();
//import our model
const Post = require('../models/Posts')

//GET Routes the .find() is a mongoose method
//Gets the posts 
router.get('/', async (req, res) => {
  try{
      const posts = await Post.find();
      res.json(posts);
  } catch (err){
      res.json({ message: err })
  }
});

//POST Routes
//Submits a post
router.post('/', async (req, res) =>{
  console.log(req.body);
  const post = Post({
    title: req.body.title,
    description: req.body.description
  });
  try{
      const savedPost = await post.save()
      res.json(savedPost);
  } catch (err){
      res.json({ message: err });
  }
});

//Specific Post 
router.get('/:postId', async (req, res) => {
  try{
      const post = await Post.findById(req.params.postId);
      res.json(post);
  } catch (err){
      res.json({ message: err });
  }
})

//Delete Post
router.delete('/:postId', async (req, res) => {
  try{
      const removedPost = await Post.remove({ _id: req.params.postId });
      res.json(removedPost);
  } catch (err){
      res.json({ message: err });
  }
});

//Update Post
router.patch('/:postId', async (req, res) => {
  try{
      const updatedPost = await Post.updateOne(
          { _id: req.params.postId }, 
          { $set: {title: req.body.title}}
      ); 
      res.json(updatedPost)
  } catch (err){
      res.json({ message: err });
  }
});

//exports this router
module.exports = router;