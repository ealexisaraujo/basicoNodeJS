const model = require('./model');

const addUser = async user => {
  const addUser = await new model(user);
  addUser.save();
};

const getUsers = async filterUser => {
  let filter = {};
  if (filterUser !== null) {
    filter = {
      name: new RegExp(filterUser, 'i')
    };
  }
  const users = await model.find(filter);
  return users;
};

module.exports = {
  add: addUser,
  list: getUsers
};
