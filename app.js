const express = require('express');
const bodyParser = require('body-parser');
const cros = require('cros');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cros());



module.exports = app;
