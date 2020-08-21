const express = require('express');
const router = express.Router();
const loginRoute = require('../routes/login');
const signupRoute = require('../routes/signup');
const userRoute = require('../routes/users');

//route to login.js
router.use('/login', loginRoute);

//route to signup.js
router.use('/signup', signupRoute);

//route to dashboard.js
router.use('/users', userRoute);

module.exports = router;