//import express
const express = require('express');
// execute router 
const router = express.Router();

//GET Routes
router.get('/', (req, res) => {
  res.send('We are on posts now');
});

//exports this router
module.exports = router;