const express = require('express');
const router = express.Router();

const career = require('./career');

router.get('/career', career);

module.exports = router;
