const socketio = require('@hilma/socket.io-server').default;

const io = socketio(8080);

io.on('connection', socket => {
    socket.on('send-message', (chatId, message) => {
        io.to(chatId).emit('send-message', message);
    });
});