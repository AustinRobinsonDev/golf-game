const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io')
const io = socket(server);

server.listen(5000, () => console.log('server running on port 5000'))
// (5000, {
//     cors: {
//         origin: ["http://localhost:3000"],
        
//     }
// });
io.on('connection', socket => {
    const id = socket.handshake.query.id
    socket.join(id)

    socket.on('join-room', id => {
        socket.join(id)
    })
})

