const express = require('express');

function sample(app) {
  const router = express.Router();
  app.use('/sample', router);

  router.get('/', (req, res) => {
    res.header({
      'custom-header': 'as custom as',
    });
    res.send('GET request to the homepage');
  });
  router.post('/', function(req, res) {
    res.send('POST request to the homepage');
  });
  router.delete('/', function(req, res) {
    console.log(req.body);
    console.log(req.query);
    res.send('Delete request to the homepage');
  });
}

module.exports = sample;
