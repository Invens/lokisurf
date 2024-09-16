const cluster = require('cluster');
const http = require('http');
const os = require('os');
const numCPUs = os.cpus().length;
const next = require('next');
const { createServer } = require('http');
const { parse } = require('url');

if (cluster.isMaster) {
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev });
  const handle = app.getRequestHandler();

  app.prepare().then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    }).listen(3000, () => {
      console.log(`Worker ${process.pid} started`);
    });
  });
}
