const store = require('./store');

function addMessagge(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.log('[messageController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };
    store.add(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addMessagge,
  getMessages
};
