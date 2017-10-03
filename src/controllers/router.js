const express = require('express');
const router = express.Router();

const error = require('./error');
const career = require('./career');

router.get('/career', career);

router.use(error.client);
router.use(error.server);

module.exports = router;
