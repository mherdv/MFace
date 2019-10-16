const express = require('express');
const router = express.Router();


router.use('/authorization', require('./authorization'));

module.exports = router;