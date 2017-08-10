const express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/captinPlanet', function(req, res){
  res.send('Save the planet man!');
})

app.listen('8080', function(){ console.log('listening on port 8080'); });
