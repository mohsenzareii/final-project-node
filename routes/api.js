const express = require('express');
const router = express.Router();
const loginRoute = require('../routes/login');
const signupRoute = require('../routes/signup');

//route to login.js
router.use('/login', loginRoute);

//route to signup.js
router.use('/signup', signupRoute);

module.exports = router;