const express = require('express');

const response = require('../../utils/network/reponse');

const controller = require('./controller');

const router = express.Router();

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
