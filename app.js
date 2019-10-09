//import express
const express = require('express')
//execute express 
const app = express()

//Routes Pass the route and you have your request and response
app.get('/', (req, res) => {
  res.send('We are on home')
});

//How we start listening to the server
app.listen(3001)