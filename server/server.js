var express = require('express');
var app =  express();
var mongoose = require('mongoose');

/* Connect to database */
mongoose.connect('mongodb://localhost/kissthebus');
var db = mongoose.connection();
db.on('error', console.error.bind(console, 'connection error;'));
db.once('open', function() {
	console.log('connection created');
});

// Serve static client-side files
app.use(express.static(__dirname + '/../client/www'));

app.listen(3000);
console.log('Listening on port 3000');
