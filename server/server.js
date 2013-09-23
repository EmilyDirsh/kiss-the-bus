var express = require('express');
var app =  express();

//Hello test route
app.get('/hello', function (req, res) {
	res.send('hello');
}

// Serve static client-side files
app.use(express.static(__dirname + '/../client/www'));

app.listen(3000);
console.log('Listening on port 3000');
