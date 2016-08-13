// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongojs = require('mongojs');

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 8080; 

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(express.static('./public'));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
var databaseUrl = 'nytreact';
var collections = ["nytreact"];

// use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

db.on('error', function (err) {
  console.log('MongoDB Error: ', err);
});

// -------------------------------------------------

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
	console.log("Im loading the Index page.");
  res.sendFile('./public/index.html');
});

// This is the route we will send POST requests to save each search.
// app.post('/api/', function(req, res){
//   console.log("BODY: " + req.body);

//   // Here we'll save the location based on the JSON input. 
//   // We'll use Date.now() to always get the current date time
//   db.history.insert({"title": req.body.title, "date": Date.now(), "url": req.body.url}, function(err){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.send("Saved Search");
//     }
//   })
// });

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT:  " + PORT);
});