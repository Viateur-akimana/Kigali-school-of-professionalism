import { createServer } from 'http';
import next from 'next';
import { initializeSocket } from "./server/socket-server";

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  const io = initializeSocket(server);  // Initialize Socket.io with the HTTP server

  server.listen(3000, (err?: any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});