const { genericIOServer } = require('@hilma/socket.io-react/server');

const io = require('socket.io')(8080);

genericIOServer(io);

io.on('connection', socket => {
    socket.on('some-event', number => {
        console.log("hello?")
        socket.broadcast.emit('some-event', number);
    })
});