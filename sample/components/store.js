const list = [];

const addMessage = message => {
  list.push(message);
  return true;
};

const getMessages = () => {
  return list;
};

module.exports = {
  add: addMessage,
  list: getMessages
};
