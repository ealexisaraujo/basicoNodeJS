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

function getMessages(filterUser) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      return reject('Invalid Data');
    }
    store.remove(id);
    resolve();
  });
}

function updateMessage(id, message) {
  return new Promise((resolve, reject) => {
    console.log(id, message);
    if (!id || !message) {
      return reject('Invalid Data');
    }
    store.updateText(id, message);
    resolve(updateMessage);
  });
}

module.exports = {
  addMessagge,
  getMessages,
  updateMessage,
  deleteMessage
};
