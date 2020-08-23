const express = require('express');
const router = express.Router();
const loginRoute = require('../routes/login');
const signupRoute = require('../routes/signup');
const userRoute = require('../routes/users');

//check session for login 
const isLogin = function (req, res, next){
    if(req.session.user) return res.redirect('/api/users/dashboard');
    next();
}

//check session for access to dashboard 
const checkSession = function(req, res, next){
    if(!req.session.user) return res.redirect('/api/login');
    next();
}

//route to login.js
router.use('/login', isLogin, loginRoute);

//route to signup.js
router.use('/signup', signupRoute);

//route to dashboard.js
router.use('/users', checkSession, userRoute);

module.exports = router;