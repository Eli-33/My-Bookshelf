const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bookSchema = require('./book');

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
   // set savedBooks to be an array of data that adheres to the bookSchema
   books: [{ type: Schema.Types.ObjectId, ref: 'GoogleBooks' }]

});

UserSchema.virtual('bookCount').get(function () {
  return this.books.length;
});

const User = mongoose.model("users", UserSchema);

module.exports = User;

// module.exports = User = mongoose.model("users", UserSchema);
