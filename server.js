var bodyParser = require('body-parser');

var express = require('express');
var app = express();

var controllers = require('./controllers');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); //point server to all files in public


// ROUTES

// HTML Endpoints
app.get('/', function(req, res) {
  res.sendFile('views/index.html' , {root : __dirname});
  console.log(__dirname);
});


// JSON API Endpoints
app.get('/api', function apiIndex(req, res) {
  res.json({
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "POST", path: "/api/jokes", description: "What was your favorite April Fools prank of 2018"} // CHANGE ME
    ]
  })
})

app.post('/api/jokes', controllers.jokes.create);

app.post('/', function(req, res) {
  var newJoke = new db.Jokes(req.body);
  newJoke.save(function(err, savedJoke) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(savedJoke);
    }
  })
})

//set Heroku to listen to port 3000
app.listen(process.env.PORT || 3000);

app.get('/api', controllers.api.index);
