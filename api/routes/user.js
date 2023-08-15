const express = require('express');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', checkAuth, (req, res) => {
    var roomKey = req.cookies.roomKey;
    // res.send(`Welcome to chat app ${req.userData.username}
    //         </br>your id is: ${req.userData._id}
    //         </br>Your room key is: ${roomKey}
    //         </br>If your room key is right will open chat as soon as possible
    //     `);
    res.render('chat')
});

module.exports = router;
