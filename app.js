const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const checkAuth = require('./api/middleware/check-auth')
const Room = require('./models/rome')

const messagesRouter = require('./api/routes/messages');

const app = express();

mongoose.connect(process.env.MONGO_URL)

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.render('index');
})

app.use('/messages', messagesRouter);

app.use('/chat', checkAuth, (req, res) => {
    const roomKey = req.cookies.roomKey;
    console.log(roomKey);
    Room.findOne({ key: roomKey })
        .exec()
        .then(room => {
            console.log(room);
            if (!room) {
                return res.send("Room not found");
            }
            res.render('chat', room);
        }).catch(err => {
            console.log(err);
            res.send("Server error");
        });
})

module.exports = app;
