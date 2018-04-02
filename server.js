var bodyParser = require('body-parser');

var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public')); //point server to all files in public

app.get('/', function(req, res) {
  res.sendFile('views/index.html' , {root : __dirname});
  console.log(__dirname);

});

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
app.listen(process.env.PORT || 3000)

app.get('/api', controllers.api.index);

app.get('/api/')
