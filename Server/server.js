const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, '..', 'Public')));

// Store active users
const users = {};

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Handle User Joining
    socket.on('new-user', (username) => {
        users[socket.id] = username;
        socket.broadcast.emit('user-connected', username);
        // Update online status for everyone
        io.emit('update-user-list', Object.values(users));
    });

    // Handle Sending Messages
    socket.on('send-chat-message', (message) => {
        // Broadcast message to everyone INCLUDING the sender
        io.emit('chat-message', {
            message: message,
            name: users[socket.id]
        });
    });

    // Handle Disconnect
    socket.on('disconnect', () => {
        if (users[socket.id]) {
            socket.broadcast.emit('user-disconnected', users[socket.id]);
            delete users[socket.id];
            io.emit('update-user-list', Object.values(users));
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});