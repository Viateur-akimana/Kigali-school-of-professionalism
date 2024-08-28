import { Server as HttpServer, IncomingMessage, ServerResponse } from 'http';
import { Http2SecureServer, Http2Server } from 'http2';
import { Server as HttpsServer } from 'https';
import { Server as SocketIOServer } from 'socket.io';

let io: SocketIOServer | null = null;

type ServerType = HttpServer | HttpsServer | Http2SecureServer | Http2Server;

export const initializeSocket = (server: ServerType | number): SocketIOServer => {
    if (io) return io;

    io = new SocketIOServer(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    io.on('connection', (socket) => {
        console.log('New client connected');
        socket.on('disconnect', () => {
            console.log('Client disconnected');
        });
    });

    return io;
};

export const getIo = (): SocketIOServer => {
    if (!io) {
        throw new Error('Socket.io not initialized');
    }
    return io;
};