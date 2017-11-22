const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Brand = new Schema({
  title:String,
  description:String,
  url:String,
  datetime:String,
  likecount: Number
});

module.exports = mongoose.model('Brand',Brand);
