const express = require('express');
const helmet = require('helmet');
const app = express();

const { config } = require('./config/index');
const sample = require('./routes/sample');

//body parser
app.use(express.json());
app.use(helmet());
sample(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
