const express = require('express');
const helmet = require('helmet');
const app = express();

const { config } = require('./config/index');
const sample = require('./routes/sample');
const sampleStatic = require('./routes/sampleStatic');

//body parser
app.use(express.json());
app.use(helmet());
sample(app);
sampleStatic(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
