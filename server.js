var express = require('express'),
	app = express(),
	http = require('http').Server(app),
	bodyParser = require('body-parser'),
	path = require('path'),
	io = require('socket.io')(http),
	db = require('./models');

app.use("/public", express.static("public"));
app.use("/vendor", express.static("bower_components"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	res.sendFile(process.cwd() +"/room1.html");
});

io.on('connection', function(socket){
	console.log('socket connected');
	socket.emit('test', "hello world!")
});

http.listen(process.env.PORT || 3000, function(){
	console.log("Socket Play is on port: " + (process.env.PORT || 3000));
});