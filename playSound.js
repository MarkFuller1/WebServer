//server.js
const express = require('express'),
        server = express(),
        Sound = require('node-aplay');

var portNum = 3000;

//setting the port.
server.set('port', process.env.PORT || portNum);

//Adding routes
server.get('/',(request,response)=>{
        response.sendFile(__dirname + '/index.html');
});

server.get('/playsound',(request,response)=>{
        console.log('Success');

        //play sound
        var tone = new Sound('2000.wav').play();

        response.status(200);
});

//Binding to localhost://portNum
server.listen(portNum,()=>{
        console.log('Express server started at port' + portNum);
});
