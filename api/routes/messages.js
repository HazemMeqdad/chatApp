const express = require('express');
const checkAuth = require('../middleware/check-auth');
const Messages = require('../../models/messages');

const router = express.Router();

router.get('/', checkAuth, (req, res) => {
    const limit = parseInt(req.query.limit) || 50;
    const roomKey = req.cookies.roomKey;
    Messages.find({ roomKey: roomKey })
        .sort({ createdAt: -1 })
        .limit(limit)
        .populate('sender', "_id username avatar")
        .select('_id sender date content')
        .exec()
        .then((messages) => {
            res.status(200).json(messages);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
});

router.post('/', checkAuth, (req, res) => {
    const roomKey = req.cookies.roomKey;
    const message = new Messages({
        _id: new mongoose.Types.ObjectId(),
        sender: req.userData.userId,
        roomKey: roomKey,
        content: req.body.content
    });
    message.save()
        .then((result) => {
            res.status(201).json({
                message: 'Message created'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
})

module.exports = router;
