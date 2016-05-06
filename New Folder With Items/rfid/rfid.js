var tessel = require('tessel');
var rfidlib = require('rfid-pn532');

var rfid = rfidlib.use(tessel.port['A']); 

rfid.on('ready', function (version) {
  console.log('Ready to read RFID card');

  // rfid.startListening(function(err){
  // 	console.log("SECRET");
  // })

  rfid.on('data', function(card) {

  	// var blockNumber = 0xFF;
  	// console.log(rfid.mifareClassicReadBlock( blockNumber, callback(err, data) ))
  	console.log(card);
    console.log('UID:', card.uid.toString('hex'));
  });
});



rfid.on('error', function (err) {
  console.error(err);
});