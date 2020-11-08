const io = require('socket.io')(3000, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (client) => {
  client.emit('message', 'Welcome');
  client.on('message', console.log);
});
