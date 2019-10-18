const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectedMongoose = require('./serverConnection');

// adding middlewares 
app.use(bodyParser.json())

// cultivation of routes 
app.use(function (req, res, next) {
    res.header("Content-Type", 'application/json');
    next();
});
app.use('/', require('./routes'))


module.exports = app;