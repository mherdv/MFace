const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectedMongoose = require('./serverConnection');

// use it before all route definitions
app.use(cors({ origin: 'http://localhost:3000' }));

// adding middlewares 
app.use(bodyParser.json())

// cultivation of routes 

app.use('/', require('./routes'))


module.exports = app;