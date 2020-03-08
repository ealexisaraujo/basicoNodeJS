const model = require('./model');

const addMessage = async message => {
  const myMessage = await new model(message);
  myMessage.save();
};

const getMessages = async filterUser => {
  let filter = {};
  if (filterUser !== null) {
    filter = {
      user: new RegExp(filterUser, 'i')
    };
  }
  try {
    const messages = await model
      .find(filter)
      .populate('user')
      .exec();
    return messages;
  } catch (error) {
    console.log(error.message);
  }
};

const updateText = async (id, message) => {
  const foundMessage = await model.findOne({ _id: id });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
};

const removeMessage = async id => {
  const deleteMessage = await model.deleteOne({ _id: id });
  return deleteMessage;
};

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage
};
