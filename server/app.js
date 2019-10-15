const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const auth = require('./routes/api/authorization')


app.use(bodyParser.json())

app.use('/api/authorization',auth)


module.exports = app;