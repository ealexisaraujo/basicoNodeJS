const express = require('express');

const response = require('../../utils/network/reponse');

const controller = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const chatList = await controller.getChats();
    response.success(req, res, chatList, 200);
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

router.post('/post', async (req, res) => {
  const { users } = req.body;
  try {
    const newChat = await controller.addChat(users);
    response.success(req, res, newChat, 201);
  } catch (error) {
    response.error(
      req,
      res,
      'Informacion Invalida',
      500,
      'Error en el controlador'
    );
  }
});

module.exports = router;
