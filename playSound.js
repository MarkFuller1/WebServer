//server.js
const express = require('express'),
        server = express(),
        Sound = require('node-aplay'),
        path = require('path')

var portNum = 3000;

server.use(express.static(path.join(__dirname, 'public')));

//setting the port.
server.set('port', process.env.PORT || portNum);

//Adding routes
server.get('/',(request,response)=>{
        response.sendFile(path.join(path.join(__dirname, 'views'), 'index.html'));
});

server.get('/test' ,(request,response)=>{
        console.log('Success');

        //play sound
        var tone = new Sound('2000.wav').play();

        response.status(200);
});

server.get('/playsound', (request, response)=>{
	console.log('Success');

	//play sound
	var tone = new Sound('48000.wav').play();

	response.status(200);
});

//Binding to localhost://portNum
server.listen(portNum,()=>{
        console.log('Express server started at port' + portNum);
});
