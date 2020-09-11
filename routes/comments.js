const express = require('express');
const router = express.Router();
const Article = require('../models/article');


//send myComments page to client 
router.get('/:articleId', async(req, res) =>{
    try {
        let article = await Article.findById({_id : req.params.articleId});
        res.render('pages/myComments', {user : req.session.user, article : article});
    } catch (error) {
        
    }   
});

module.exports = router;