// Generated by CoffeeScript 1.3.3
(function() {
  var app, db, express, mongoose;

  express = require('express');

  app = express();

  mongoose = require('mongoose');

  db = mongoose.createConnection('localhost', 'mbtapp');

  db.on('error', function() {
    return console.log('DB connection error');
  });

  db.once('open', function() {
    return console.log('DB connection successful');
  });

  app.get('/', function(req, res) {
    return res.send('<h1>Hello</h1><p>Hello, app!</p>');
  });

  app.listen(3000);

  console.log('Listening on port 3000');

}).call(this);
