const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Brand = new Schema({
  title:String,
  description:String,
  url:String,
  datetime:String,
  like: Boolean
});

module.exports = mongoose.model('Brand',Brand);
