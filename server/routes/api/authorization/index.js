const express = require('express');
const router = express.Router();

const UsersSchema = require('../../../models/User');
console.log(require('./login'))

router.post('/login', require('./login').bind(null, UsersSchema));
router.post('/registration', require('./registration'));

module.exports = router;