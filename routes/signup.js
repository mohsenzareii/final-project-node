const express = require('express');
const router = express.Router();
const User = require('../models/user');
const hash = require('object-hash');

//send signup page to client
router.get('/', (req, res) =>{
    res.render('pages/signup',{message : null});
});

//record new user to database and redirect to login page
router.post('/newUser', async(req, res) =>{
    try {
       
        if(!req.body.firstName || !req.body.firstName || !req.body.userName || !req.body.password || !req.body.mobile ){
            throw new Error('فیلد های الزامی را کامل کنید!!')
        }
        let bloger = await User.findOne({userName : req.body.userName});
        if(bloger){
            throw new Error("نام کاربری قبلا ثبت شده است ! ");
        }

        const New_User = new User({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            userName : req.body.userName,
            password : hash(req.body.password),
            mobile : req.body.mobile,
            sex : req.body.sex,
            role : 'bloger'
        });
        
        await New_User.save();

        res.redirect(303, '/api/login/');

    } catch (error) {
        res.render('pages/signup', {message : error.message});
    }
});

module.exports = router;