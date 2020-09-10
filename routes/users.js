const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Article = require('../models/article');


/* GET users listing. */
router.get('/dashboard', async(req, res) => {
  try {
    let articles = await Article.find({author : req.session.user._id});
    res.render('pages/dashboard', {user : req.session.user, articles : articles});
  } catch (error) {
    
  }
  
});

//send edit page to client
router.get('/editProfile', (req, res) =>{
  res.render('pages/editProfile', {user : req.session.user , message : null});
});

//edit profile 
router.put('/editProfile', async(req, res) =>{
 
 try {
    if(!req.body.firstName || !req.body.lastName || !req.body.mobile){
      throw new Error('لطفا تمام فیلد ها را کامل کنید !!!');
    } 
    
    await User.findByIdAndUpdate({_id : req.session.user._id}, {$set : {firstName : req.body.firstName,
                                                                        lastName : req.body.lastName,
                                                                         mobile : req.body.mobile}});
    let bloger = await User.findById({_id : req.session.user._id});
    req.session.user = bloger ;
    
    res.send({redirect : '/api/users/dashboard'});

 } catch (error) {
   res.render('pages/editProfile', {user : req.session.user, message : error.message});
 }
});

//delete session and send login page to client
router.get('/logOut', (req, res) =>{
  if(req.session){
    req.session.destroy((err) =>{
        if(!err) return res.redirect('/api/login/');
    });
  }
});

module.exports = router;
