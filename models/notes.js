const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nodeSchema = new Schema({
    id: {type: String, require: true},
    title: { type: String, require: true},
    description: { type: String, require: true},
    userId: { type: Schema.Types.ObjectId, ref: 'users' }
});

const Note = mongoose.model("Note", nodeSchema);

module.exports = Note;


