const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectedMongoose = require('./serverConnection');

// adding middlewares 
app.use(bodyParser.json())

// cultivation of routes 
app.use('/', require('./routes'))


module.exports = app;