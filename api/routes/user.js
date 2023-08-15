const express = require('express');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

router.get('/', checkAuth, (req, res) => {
    res.send('Hello World');
});

module.exports = router;
