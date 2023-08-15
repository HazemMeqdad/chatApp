const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    content: String,
    sender: String,
    receiver: String,
    date: Date
})

module.exports = mongoose.model('Messages', messagesSchema);
