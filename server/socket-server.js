"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIo = exports.initializeSocket = void 0;
var socket_io_1 = require("socket.io");
var io = null;
var initializeSocket = function (server) {
    if (io)
        return io;
    io = new socket_io_1.Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });
    io.on('connection', function (socket) {
        console.log('New client connected');
        socket.on('disconnect', function () {
            console.log('Client disconnected');
        });
    });
    return io;
};
exports.initializeSocket = initializeSocket;
var getIo = function () {
    if (!io) {
        throw new Error('Socket.io not initialized');
    }
    return io;
};
exports.getIo = getIo;
