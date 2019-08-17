var http = require('https');
var express = require('express');
const shell = require('shelljs');
var player = require('play-sound')(opts = {})

var app = express();

//Next we will define an array of objects the client will be able to query….

var inputs = [{ pin: '11', gpio: '17', value: 1 },
              { pin: '12', gpio: '18', value: 0 }];

//Then configure Express to serve index.html and any other static pages stored in the home directory, such as your myclient.js JavaScript source file

  app.use(express['static'](__dirname ));

//Next we need to define the API middleware for our server-side application. We use express’s get function to define routes for the API calls and/or page requests to our server.

// Express route for incoming requests for a customer name
app.get('/playsound', function(req, res) {
        console.log("achieved");

        //play the sound
        player.play('2000.wav', function(err){
                if(err) throw err
        })
  res.status(200).send(inputs[req.params.id]);
}); 

// Express route for any other unrecognised incoming requests
app.get('*', function(req, res) {
  res.status(404).send('Unrecognised API call');
        console.log("404 achieved");
});

// Express route to handle errors
app.use(function(err, req, res, next) {
  if (req.xhr) {
    res.status(500).send('Oops, Something went wrong!');
  } else {
    next(err);
  }
});

//Finally, start the server application, listening on port 3000:
var portNum = 8002;
app.listen(portNum);
console.log('App Server running at port' + portNum);

/*
 * var http = require('https');
var express = require('express');

var app = express();

//#app.use(expresss['static'](__dirname ));

//Express route for incoming requests for customer name
app.get('/playsound', function(req, res) {
        res.status(200).send('API Hit');
});

//Express route for any other unrecognised incoming requests
app.get('*', function(req, res){
    res.status(404).send('Unrecognised API call');
});

//Express route to handle errors
app.use(function(err, req, res, next) {
        if(req.xhr){
                req.status(500).send('Oops, something went wrong!');
        } else {
                next(err);
        }
});

app.listen(8000);
console.log('App server running on port 8000');
*/
