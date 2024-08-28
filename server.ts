const { createServer } = require('http');
const next = require('next');
const { initializeSocket } = require('./server/socket-server');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req: any, res: any) => {
    handle(req, res);
  });


  initializeSocket(server);

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
