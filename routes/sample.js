const express = require('express');

function sample(app) {
  const router = express.Router();
  app.use('/sample', router);

  router.get('/', (req, res) => {
    res.send('GET request to the homepage');
  });
  router.post('/', function(req, res) {
    res.send('POST request to the homepage');
  });
}

module.exports = sample;
