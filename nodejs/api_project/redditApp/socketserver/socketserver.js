'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').createServer(app);
const io = require('socket.io').listen(http);
const moment = require('moment');
var fs = require("fs");

// We use this to read the messages log text file
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('messages.txt')
});

app.use(express.static('static'));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true,
}));

app.use(function(req, res, next) {
    console.log('Time:', moment(Date.now()));
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


function initRequestHandlers() {
    app.get('/', function(req, res) {
        console.log('-> index.html');
        res.sendFile(__dirname + '/index.html');
    });
}

function initSockets() {
    io.on('connection', function(socket) 
    {
        const socketid = socket.id;
        console.log('a user connected with session id '+socket.id);
        socket.on('disconnect', function() {
            console.log('user disconnected');
        });

        // When a user connects, read the messages and send them to
        lineReader.on('line', function (line)
        {
            var msg = {};
            msg.text = line;
            io.sockets.connected[socketid].emit("message", msg);
        });

        lineReader();
        

        // dynamic room, from https://gist.github.com/crtr0/2896891
        socket.on('app_id', function(app_id) {
            console.log('joining room "' + app_id + '"');
            // app_id = room
            socket.join(app_id);
        });

        socket.on('message', function(jsonMsg) {
            console.log('msg : '+jsonMsg.text);
            console.log('room: '+jsonMsg.app_id);
            jsonMsg.socketid = socketid; // pad client id to response
            io.sockets.in(jsonMsg.app_id).emit('message', jsonMsg);

            // Write into message log
            fs.appendFile('messages.txt', jsonMsg.text, function (err)
            {

            });
        });
    });
}

function startServer() {
    initRequestHandlers();
    initSockets();

    http.listen(3000, function() {
        console.log('Server started (3000)');
    });
}

startServer();
