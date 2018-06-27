const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


const { mongoose } = require('./db.js');
var factoryController = require('./controllers/factoryController.js');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(cors());

io.on('connection', (socket) =>{
    io.emit('update', );
});
io.on('message', ()=>{
    console.log('message received');
});

http.listen(port, function(){
    console.log('listening on *:3000');
  });



app.use('/factories', factoryController);
