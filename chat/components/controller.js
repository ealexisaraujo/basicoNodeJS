const store = require('./store');

function addChat(users) {
  return new Promise((resolve, reject) => {
    if (!users) {
      console.log('[ChatController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
    }
    const newChat = {
      users: users
    };
    store.add(newChat);
    resolve(newChat);
  });
}

function getChats() {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addChat,
  getChats
};
