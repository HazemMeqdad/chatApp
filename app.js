const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');

const userRouter = require('./api/routes/user');

const app = express();

mongoose.connect(process.env.MONGO_URL)

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(cookieParser())

app.get('/', (req, res) => {
    res.render('views/index');
})

app.use('/user', userRouter)

module.exports = app;
