const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    content: String,
    sender: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now},
    roomKey: String
})

module.exports = mongoose.model('Messages', messagesSchema);
