const express = require('express');

function Planet(req, res){
  res.send('Save the planet man!!!!!!!!!');
}
var num = 0;

function count(req, res){
  num = num+1;
  res.send(`The count is: ${num}`);
}

var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/captinPlanet', Planet)

app.get("/count", count)


app.listen('8080', function(){ console.log('listening on port 8080'); });
