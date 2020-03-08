const express = require('express');
const multer = require('multer');
const path = require('path');

const response = require('../../utils/network/reponse');

const controller = require('./controller');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/files/`);
  },
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({ storage });
router.get('/', async (req, res) => {
  // const filterMessages = req.query.user || null;
  const filterChat = req.query.chat || null;
  try {
    const messageList = await controller.getMessages(filterChat);
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

router.post('/post', upload.single('file'), async (req, res) => {
  const { chat, user, message } = req.body;

  try {
    const fullMessage = await controller.addMessagge(
      chat,
      user,
      message,
      req.file
    );
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

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deleteMessage = await controller.deleteMessage(id);
    response.success(req, res, `Usuario ${id} eliminado`, deleteMessage, 200);
  } catch (error) {
    response.error(req, res, 'Error interno', 500, 'Error en el controlador');
  }
});

// res.status(201).send({
//   error: '',
//   body: 'Creado',
// });

module.exports = router;
