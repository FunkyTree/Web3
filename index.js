const
  express = require('express'),
  bodyParser = require('body-parser'),
  http = require('http'),
  fs = require('fs');
  index = fs.readFileSync('index.html');

var array = [];
var app = express();

app.use(bodyParser());

app.get('/', function(req, res){
	console.log('GET /');
	var html = fs.readFileSync('index.html');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
});

app.get('/issues', function(req, res){
	console.log('GET /issues');
	res.json(array);
	res.writeHead(200, {'Content-Type': 'application/json'});
});

app.post('/', function(req, res){
	console.log('POST /');
	array.push(req.body);

	var html = fs.readFileSync('index.html');

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(html);
});

app.listen("8080");
console.log('Listening at Port 8080');

