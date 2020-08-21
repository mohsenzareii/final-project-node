const express = require('express');
const router = express.Router();
const User = require('../models/user');


/* GET users listing. */
router.get('/dashboard', async(req, res) => {

  
  res.render('pages/dashboard', {user : req.session.user});
});

module.exports = router;
