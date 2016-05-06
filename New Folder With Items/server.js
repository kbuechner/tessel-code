var http = require('http');
var server = http.createServer();

server.on('request', function () {
	console.log('ON!LSKDJFLKJSDLKFJ');
})

server.listen(8080, function () {
	console.log('listening')
})