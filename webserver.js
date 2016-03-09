var express = require('express'),
		bodyParser = require('body-parser');

var app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
});

app.listen(8000, function() {
	console.log('listening on port 8000');
});
