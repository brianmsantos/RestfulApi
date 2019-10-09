//import express
const express = require('express');
// execute router 
const router = express.Router();
//import our model
const Post = require('../models/Posts')

//GET Routes
router.get('/', (req, res) => {
  res.send('We are on posts now');
});

//POST Routes
router.post('/',(req, res) =>{
  console.log(req.body)
});

//exports this router
module.exports = router;