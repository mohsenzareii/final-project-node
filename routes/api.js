const express = require('express');
const router = express.Router();
const loginRoute = require('../routes/login');

//route to login.js
router.use('/login', loginRoute);

module.exports = router;