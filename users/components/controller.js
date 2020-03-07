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

module.exports = {
  addUser
};
