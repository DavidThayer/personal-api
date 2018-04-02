var db = require('../models');

var jokes = [];

// GET
function index(req, res) {
  db.Jokes.find({}, function(err, foundJokes) {
    res.json(foundJokes);
  })
};

// POST
function create(req, res) {
  console.log('create routed');
  db.Jokes.create(req.body, function(err, foundJokes) {
    res.json(foundJokes);
  })
}

module.exports = {
  index: index,
  create: create
}
