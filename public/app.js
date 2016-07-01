$(function(){
	var socket = io();

	socket.on('test', function(data){
		console.log(data);
	});

	$('#testBtn').click(function(e){
		socket.emit('pressed')
	});

	socket.on('ping', function(data){
		$('body').append(data);
	});
});