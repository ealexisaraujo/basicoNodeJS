const sample = require('../../sample/components/sample');
const user = require('../../users/components/users');

const routes = server => {
  server.use('/sample', sample);
  server.use('/user', user);
};

module.exports = routes;
