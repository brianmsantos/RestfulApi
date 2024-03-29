//import express
const express = require('express');
//execute express 
const app = express();
//import mongoose
const mongoose = require('mongoose');
//import body-parser
const bodyParser = require('body-parser');
const cors = require('cors');

//pulls in our dotenv file which hides our password which we pass down to mongoose.connect as 'process.env.DB_CONNECTION,'
require('dotenv/config');

//Use a middleware
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);

//Routes Pass the route and you have your request and response
app.get('/', (req, res) => {
  res.send('We are on home');
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('Connected to DB!')
);


//How we start listening to the server
app.listen(3001)