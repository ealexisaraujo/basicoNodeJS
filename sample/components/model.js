const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema({
  chat: {
    type: schema.Types.ObjectId,
    ref: 'chat'
  },
  user: {
    type: schema.Types.ObjectId,
    ref: 'user'
  },
  message: String,
  date: Date,
  file: String
});

const model = mongoose.model('Message', mySchema);

module.exports = model;
