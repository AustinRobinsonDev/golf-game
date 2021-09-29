const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socket = require('socket.io');
const io = socket(server, {
    cors: {
        origin: ['http://localhost:3000']
    }
});

    let users = [];

    io.on('connection', socket => {
        console.log(socket.id)
        socket.on("join server", (username) => {       
            const user = {
                username,
                id: socket.id,
                score: []
            };
            users.push(user);
            io.emit("new user", users);
        });
        socket.on('join room', (roomName) => {
            socket.join(roomName);
        });
        socket.on('next hole', (rp, un) => {

            users.forEach(i => {
                if (i.username === un){
                    i.score.push(parseInt(rp))
                }
            }) 
            io.emit("new user", users);
            console.log(users)
        });
        socket.on('disconnect', () => {
            users = users.filter(u => u.id !== socket.id);
            io.emit('new user', users)

        })

    });

        
server.listen(5000, () => console.log('server running on port 5000'));
