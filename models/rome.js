const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    key: String
})

module.exports = mongoose.model('Room', RoomSchema);
