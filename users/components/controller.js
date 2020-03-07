const store = require('./store');

function addUser(name) {
  return new Promise((resolve, reject) => {
    if (!name) {
      console.log('[messageController] No hay usuario');
      return reject('Invalid name');
    }
    const user = {
      name: name
    };
    store.add(user);
    resolve(user);
  });
}

function getUsers(filterUser) {
  // eslint-disable-next-line no-unused-vars
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

module.exports = {
  addUser,
  getUsers
};
