const express = require('express');
const router = express.Router();
const authorizeMiddleWear = require('./routeMiddlewares/auth');

router.use('/api', authorizeMiddleWear, require('./api'))

module.exports = router;

