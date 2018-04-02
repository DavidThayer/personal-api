var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var JokeSchema = new Schema({
  name: String,
  description: String,
  company: String,
  link: String
});

var Jokes = mongoose.model('Jokes', JokeSchema);

module.exports = Jokes;
