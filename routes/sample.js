const express = require('express');

const response = require('../utils/network/index');

function sample(app) {
  const router = express.Router();
  app.use('/sample', router);

  router.get('/', (req, res) => {
    res.header({
      'custom-header': 'as custom as',
    });
    response.success(req, res, 'Lista de mensajes');
  });

  router.post('/', (req, res) => {
    res.send('POST request to the homepage');
    response.success(req, res, 'Lista de mensajes');
  });

  router.delete('/', (req, res) => {
    res.send(`Delete request ${req.body.text}`);
  });

  router.post('/post', (req, res) => {
    if (req.query.error == 'ok') {
      response.error(req, res, 'Error simulado', 400);
    } else {
      response.success(req, res, 'Creado correctamente', 201);
    }
    // res.status(201).send({
    //   error: '',
    //   body: 'Creado',
    // });
  });
}

module.exports = sample;
