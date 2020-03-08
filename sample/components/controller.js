const store = require('./store');

function addMessagge(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      console.log('[messageController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }

    let fileUrl = '';
    if (file) {
      fileUrl = 'http://localhost:3000/app/files/' + file.filename;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl
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
