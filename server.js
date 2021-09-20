
const io = require('socket.io')(5000, {
    cors: {
        origin: ["http://localhost:3000"],
        
    }
});
var nsp = io.of('/my-namespace');
nps.on('connection', socket => {
    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('join-room', id => {
        socket.join(id)
    })
})

// io.clients()(error, clients) => {
//     if (error) throw error;
//     console.log(clients);
// });