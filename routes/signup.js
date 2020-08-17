const express = require('express');
const router = express.Router();

//send signup page to client
router.get('/', (req, res) =>{
    res.render('pages/signup',{message : null});
});

//record new user to database and redirect to login page
router.post('/newUser', async(req, res) =>{
    try {
        if(!req.body.firstName || !req.body.firstName || !req.body.userName || !req.body.password ){
            throw new Error('فیلد های الزامی را کامل کنید!!')
        }
    } catch (error) {
        res.render('pages/signup', {message : error.message});
    }
});

module.exports = router;