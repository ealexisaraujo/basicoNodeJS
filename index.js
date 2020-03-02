const express = require('express');
const helmet = require('helmet');
const app = express();

const { config } = require('./config/index');
const router = require('./utils/network/routes');

//body parser
app.use(express.json());
app.use(helmet());
router(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
