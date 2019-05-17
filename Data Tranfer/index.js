var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var user = 'unknown'
var realname = ''
var distancedata =[];
var namenpass = ["mattiwos","admin"]
var port = process.env.PORT || 5000;

app.use(express.static( 'public'));
app.use(express.static( 'views'));
app.use(express.static( 'assets'));
app.get('/', function(req, res){
  res.render( 'index.html');
});


io.on('connection', function(socket){
  ///////////////
  console.log('a user connected');
  console.log(socket.id);
  io.emit('chat message', socket.id +' has logged on');
  io.emit('realnameandpass', namenpass)
  io.emit('sendingdistance', distancedata)
  socket.on('disconnect', function(){
    console.log('user disconnected');
    io.emit('chat message', socket.id +' has logged off');
  });
  socket.on('chat message', function(msg){

  });
});

io.sockets.on('connection', NewConnection);
function NewConnection(socket){
  console.log('new connection ' + socket.id)
  socket.on('mouse', mouseMsg)

  function mouseMsg(data) {
    socket.broadcast.emit('mouse', data)
    //io.socket.broadcast.emit('mouse', data)
    console.log(data)
  }
}

io.sockets.on('connection', NewConnections);
function NewConnections(socket){
  console.log('new connection here ' + socket.id)
  socket.on('arduino1', message)


  function message(data){
    console.log(data)
    distancedata[0] = data
    //socket.broadcast.emit('mouse', data)
    io.emit('sendingdistance', distancedata)
    //io.socket.broadcast.emit('mouse', data)
    console.log(data)
  }
}
io.sockets.on('connection', NewConnectionss);
function NewConnectionss(socket){
  console.log('new connection here ' + socket.id)
  socket.on('arduino2', message)


  function message(data){
    console.log(data)
    distancedata[1] = data
    //socket.broadcast.emit('mouse', data)
    io.emit('sendingdistance', distancedata)
    //io.socket.broadcast.emit('mouse', data)
    console.log(data)
  }
}
io.sockets.on('connection', NewConnectionsss);
function NewConnectionsss(socket){
  console.log('new connection here ' + socket.id)
  socket.on('arduino3', message)


  function message(data){
    console.log(data)
    distancedata[2] = data
    //socket.broadcast.emit('mouse', data)
    io.emit('sendingdistance', distancedata)
    //io.socket.broadcast.emit('mouse', data)
    console.log(data)
  }
}
io.sockets.on('connection', NewConnectionssss);
function NewConnectionssss(socket){
  console.log('new connection here ' + socket.id)
  socket.on('arduino4', message)


  function message(data){
    console.log(data)
    distancedata[3] = data
    //socket.broadcast.emit('mouse', data)
    io.emit('sendingdistance', distancedata)
    //io.socket.broadcast.emit('mouse', data)
    console.log(data)
  }
}
io.sockets.on('connection', NewConnectionsssss);
function NewConnectionsssss(socket){
  console.log('new connection here ' + socket.id)
  socket.on('arduino5', message)


  function message(data){
    console.log(data)
    distancedata[4] = data
    //socket.broadcast.emit('mouse', data)
    io.emit('sendingdistance', distancedata)
    //io.socket.broadcast.emit('mouse', data)
    console.log(data)
  }
}
//io.on('connection', function(socket){
  //socket.on('chat message', function(msg){
 //if (msg.includes('+my name is') == true){

      //var nameprob = msg.split(" ");
      //console.log(nameprob);
    //  user = nameprob[3]
    //  socket.id = user
    //  console.log(user);
   //socket.emit('chat message', 'Username has changed');
  //  }
  //  if (msg.includes('+my name is') == false){
      //  io.emit('chat message', socket.id + ': ' +msg);
  //  }

  //});

//});


http.listen(port, function(){
  console.log('listening on *:' + port);
});
