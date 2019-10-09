//import mongoose to use in our db file
const mongoose = require('mongoose');

//Model which is our collection of data 
const PostSchema = mongoose.Schema({
  title: {
    type: String, 
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  }
});

//export this and this will show up in our DB as Posts by using the schema(model)
module.exports = mongoose.model('Posts', PostSchema)