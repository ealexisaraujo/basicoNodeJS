const express = require('express');

const response = require('../../utils/network/reponse');

const controller = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const messageList = await controller.getMessages();
    response.success(req, res, messageList, 200);
  } catch (error) {
    response.error(
      req,
      res,
      'Unexpected Error',
      500,
      'Error en el controlador'
    );
  }
});

router.post('/', (req, res) => {
  res.send('POST request to the homepage');
  response.success(req, res, 'Lista de mensajes');
});

router.delete('/', (req, res) => {
  res.send(`Delete request ${req.body.text}`);
});

router.post('/post', async (req, res) => {
  const { user, message } = req.body;
  try {
    const fullMessage = await controller.addMessagge(user, message);
    response.success(req, res, fullMessage, 201);
  } catch (error) {
    response.error(
      req,
      res,
      'Informacion Invalida',
      400,
      'Error en el controlador'
    );
  }
});

router.patch('/:id', async (req, res) => {
  const { message } = req.body;
  const { id } = req.params;
  try {
    const updateMessage = await controller.updateMessage(id, message);
    response.success(req, res, updateMessage, 200);
  } catch (error) {
    response.error(req, res, 'Error interno', 500, 'Error en el controlador');
  }
});

// res.status(201).send({
//   error: '',
//   body: 'Creado',
// });

module.exports = router;
