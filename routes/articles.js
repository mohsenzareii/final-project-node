const express = require('express');
const router = express.Router();

//send myArticles page to client
router.get('/myArticles', (req, res) =>{
    res.render('pages/myArticles', {user : req.session.user});
});

module.exports = router;