const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const user =require('./User')

const bookSchema = new Schema({
    id: {type: String, require: true},
    title: { type: String, require: true},
    authors: [{ type: String, require: true}],
    description: { type: String, require: true},
    image: { type: String, unique: true, dropDups: true},
    link: { type: String, required: true},
    status: {type: String,required: true},
    user: user._id
});

const GoogleBooks = mongoose.model("GoogleBooks", bookSchema);

module.exports = GoogleBooks;


