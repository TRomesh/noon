const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
  post:String,
  url:String,
  title:String,
  datetime:{ type: Date, default: Date.now }
});

module.exports = mongoose.model('Post',Post);
