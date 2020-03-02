const express = require('express');
const app = express();

const { config } = require('./config/index');
const sample = require('./routes/sample');

app.use(express.json());
sample(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
