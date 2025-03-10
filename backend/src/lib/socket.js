import express from 'express';
import http from "http";
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:5173", "http://13.201.134.175:5173"], // Allow both local & EC2 frontend
        methods: ["GET", "POST"],  // Allow necessary HTTP methods
        credentials: true  // Enable sending cookies & headers
    }
});


export function getReceiverSocketId(userId){
    return userSocketMap[userId];
}

//store the online users
const userSocketMap = {};
io.on('connection', (socket) => {
    console.log('a user connected',socket.id);

    const userId = socket.handshake.query.userId;
    if(userId) userSocketMap[userId] = socket.id;

    //io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        console.log('user disconnected', socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers",Object.keys(userSocketMap));
    });
  });

export {io,server,app};