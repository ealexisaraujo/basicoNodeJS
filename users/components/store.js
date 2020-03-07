const model = require('./model');

const addUser = async user => {
  const addUser = await new model(user);
  addUser.save();
};

module.exports = {
  add: addUser
};
