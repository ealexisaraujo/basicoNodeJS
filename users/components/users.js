const express = require('express');

const response = require('../../utils/network/reponse');

const controller = require('./controller');

const router = express.Router();

router.get('/', async (req, res) => {
  const filterMessages = req.query.name || null;
  try {
    const userList = await controller.getUsers(filterMessages);
    response.success(req, res, userList, 200);
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
  const { name } = req.body;
  try {
    const nameUser = await controller.addUser(name);
    response.success(req, res, nameUser, 201);
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
