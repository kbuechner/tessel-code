// Import the interface to Tessel hardware
var tessel = require('tessel');
var av = require('tessel-av');
var os = require('os');
var port = 8080;
var camera = new av.Camera();
//var capture = camera.capture();
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var imagetoascii = require('image-to-ascii');

// // Turn one of the LEDs on to start.
// tessel.led[2].on();

// // Blink!
// setInterval(function () {
//   tessel.led[2].toggle();
//   tessel.led[3].toggle();
// }, 100);

var notificationLED = tessel.led[3];

var rfidlib = require('rfid-pn532');

var rfid = rfidlib.use(tessel.port['A']); 

var cameraFile = {
	path: '',
	image: ''
}

rfid.on('ready', function (version) {
  console.log('Ready to read RFID card');


  rfid.on('data', function(card) {
  	console.log('got a card');
  	// var blockNumber = 0xFF;
  	// console.log(rfid.mifareClassicReadBlock( blockNumber, callback(err, data) ))
  	// console.log(card);
  	camera.capture().on('data', function(image) {
  		console.log('took a picture!');
  		// if(err) console.log('error taking image!', err.toString('hex'));
  		notificationLED.low();
  		var name = card.uid.toString('hex') + '.jpg';
  		cameraFile.path = path.join(__dirname, name);
  		// fs.writeFile(cameraFile.path, image);
  		imagetoascii(image, (err, converted) => {
  			console.log('coffee is out!');
  			console.log(err || converted);
  		})
  	})
    console.log('UID:', card.uid.toString('hex'));
  })
});



rfid.on('error', function (err) {
  console.error(err);
});

app.get('/tessel', function(req, res, next){
	try{
	console.log('getting path');
	res.redirect(cameraFile.path);
	}
	catch(err){
		console.log(err);
	}
});

app.listen(8080, function () {
	console.log('Listening!');
});

//CAMERA



// http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'image/jpg' });


// }).listen(port, () => console.log(`http://${os.hostname()}.local:${port}`));



