const express = require("express");
const router = express.Router();

router.post('/search', require('./findUser'));

module.exports = router;