const express = require('express');
const db = require('./db');
const helmet = require('helmet');
const app = express();

const { config } = require('./config/index');
const router = require('./utils/network/routes');

db();
//body parser
app.use(express.json());
app.use(helmet());
app.use(config.publicRoute, express.static('public'));
router(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
