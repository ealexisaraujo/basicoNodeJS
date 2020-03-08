const express = require('express');
const db = require('./db');
const helmet = require('helmet');
const app = express();
const server = require('http').Server(app);
const socket = require('./socket');

const { config } = require('./config/index');
const router = require('./utils/network/routes');

db();
//body parser
app.use(express.json());
app.use(helmet());
app.use('/app', express.static('public'));
socket.connect(server);
router(app);

server.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
