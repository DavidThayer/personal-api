

var db = require('./models');

var aprilFoolsList =[{
  title: 'Niantic launches 8-bit pokemon GO',
  description: 'AR low-fi',
  company: 'Niantic',
  link: 'https://pokemongolive.com/post/newgraphicsapr2018/'
}, {
  title: 'Netflix acquires Seth Rogen',
  description: 'the whole thing of him',
  company: 'Netflix',
  link: 'https://media.netflix.com/en/press-releases/netflix-announces-acquisition-of-seth-rogen'
}, {
  title: 'Roku happy streaming socks',
  description: 'just kick left',
  company: 'Roku',
  link: 'https://www.youtube.com/watch?v=kzedzI7Zyd4'
}, {
  title: "Where's waldo?",
  description: 'Waldo is lost in google maps',
  company: 'Google',
  link: 'https://maps.google.com'
}];

db.Jokes.remove({}, function(err, jokes){
  // code in here runs after all jokes are removed
  db.Jokes.create(aprilFoolsList, function(err, jokes){
    // code in here runs after all jokes are created
    if (err) { return console.log('ERROR', err); }
    console.log("all pranks:", jokes);
    console.log("created", jokes.length, "pranks");
    process.exit();
  });
});
