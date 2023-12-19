const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    todoName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Business', todoSchema);
