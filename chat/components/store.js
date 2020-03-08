const model = require('./model');

const addChat = async chat => {
  const myChat = await new model(chat);
  myChat.save();
};

const getChats = async userId => {
  let filter = {};
  if (userId) {
    filter = {
      users: userId
    };
  }
  try {
    const chats = await model
      .find(filter)
      .populate('users')
      .exec();
    return chats;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  add: addChat,
  list: getChats
};
