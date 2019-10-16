const express = require('express');
const router = express.Router();


router.post('/login', require('./login'));
router.post('/registration', require('./registration'));

module.exports = router;