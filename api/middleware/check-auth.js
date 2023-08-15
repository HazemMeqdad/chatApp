const User = require('../../models/users');
const md5 = require('md5');

module.exports = (req, res, next) => {
    var cookie = req.cookies;
    if (!cookie.username || !cookie.password || !cookie.key) {
        const message = `You need to login to access this page`;
        return res.send(`<script>alert("${message}");window.location.href="/"</script>`)
    } else {
        User.findOne({ username: cookie.username, password: md5(cookie.password) })
            .exec()
            .then(user => {
                req.userData = user;
            }).catch(err => {
                console.log(err);
                res.send("Server error");
            });
    }
    next();
}
