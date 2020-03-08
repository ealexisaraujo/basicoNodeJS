const sample = require('../../sample/components/sample');
const user = require('../../users/components/users');
const chat = require('../../chat/components/chat');

const routes = server => {
  server.use('/sample', sample);
  server.use('/user', user);
  server.use('/chat', chat);
};

module.exports = routes;
