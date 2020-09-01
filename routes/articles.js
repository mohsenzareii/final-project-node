const express = require('express');
const router = express.Router();

//send myArticles page to client
router.get('/myArticles', (req, res) =>{
    res.render('pages/myArticles', {user : req.session.user});
});

router.get('/newArticle', (req,res) =>{
    res.render('pages/newArticle');
});

module.exports = router;