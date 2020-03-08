const mongoose = require('mongoose');

const schema = mongoose.Schema;

const mySchema = new schema({
  user: {
    type: schema.Types.ObjectId,
    ref: 'user'
  },
  message: String,
  date: Date
});

const model = mongoose.model('Message', mySchema);

module.exports = model;
