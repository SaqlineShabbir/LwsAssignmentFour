const data = require('./db.js');

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 7000;

// Import the library:
const cors = require('cors');

// Then use it before your routes are set up:
server.use(cors());

server.use(middlewares);
server.use(router);

server.listen(port);
