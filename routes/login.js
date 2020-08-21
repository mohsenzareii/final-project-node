const express = require('express');
const router = express.Router();
const User = require('../models/user');
const hash = require('object-hash');

router.get('/', (req, res) => {
    res.render('pages/login', { message: null });
});

router.post('/loginUser', async (req, res) => {
    try {
        if (!req.body.userName || !req.body.password) {
           throw new Error('نام کاربری و رمز عبور را وارد کنید!');
        }

        let bloger = await  User.findOne({userName : req.body.userName , password : hash(req.body.password)});
        if(!bloger){
            throw new Error('نام کاربری یا رمز عبور اشتباه است!');
        }

        res.redirect(303, '/api/users/dashboard');

    } catch (error) {
        res.render('pages/login', {message : error.message});
    }
});
module.exports = router;