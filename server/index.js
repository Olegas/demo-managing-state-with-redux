var port = 8088;

var io = require('socket.io')(port);

var logs = {};
var LIMIT = 8;

var chatList = ['Общий', 'Голые женщины 18+', 'Машинки', "Котики", "ТФКП"];

function saveLog(from, room, msg)
{
  //save log
  if(logs[room] == undefined)
    logs[room] = [];
  logs[room].push({from: from, msg: msg});

  while(logs[room].length > LIMIT)
    logs[room].shift();
}

io.on('connection', function(socket) {

  socket.on('msg', function(msg) {
    saveLog(msg.from, msg.room, msg.msg);
    console.log(msg);
    socket.emit('new', msg);
    socket.broadcast.emit('new', msg);
  });

  socket.on('getRooms', function(){
    socket.emit('list', chatList);
  });

  socket.on('getlog', function(room) {
    console.log('sending log for ' + room, logs[room]);
    socket.emit('log', logs[room] || []);
  });

  console.log('connect');
});

console.log('listening on 0.0.0.0:' + port);