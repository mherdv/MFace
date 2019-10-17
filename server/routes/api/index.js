const express = require('express');
const router = express.Router();


router.use('/authorization', require('./authorization'));
router.use('/users', require('./users'));

module.exports = router;