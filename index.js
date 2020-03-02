const express = require('express');
const app = express();

const { config } = require('./config/index');

app.use('/', function(req, res) {
  res.send('Hola');
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
