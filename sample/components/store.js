const db = require('mongoose');
const model = require('./model');
const { config } = require('../../config/index');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

db.Promise = global.Promise;
db.connect(
  `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'telegram'
  }
);

console.log('[db] conectada con exito');

const addMessage = async message => {
  const myMessage = await new model(message);
  myMessage.save();
};

const getMessages = async () => {
  const messages = await model.find();
  return messages;
};

const updateText = async (id, message) => {
  const foundMessage = await model.findOne({ _id: id });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
};

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText
};
