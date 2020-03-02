const sample = require('../../sample/components/sample');

const routes = server => {
  server.use('/sample', sample);
};

module.exports = routes;
