const express = require('express');
const router = express.Router();
const multer = require('multer');
const Article = require('../models/article');

//initial multer
const storage = multer.diskStorage({
    destination : function (req, file, cb){
        cb(null, 'public/articles');
    },
    filename : function (req, file, cb){
        cb(null, req.session.user.userName + "-" + file.originalname);
    }
});

const uploadArticle = multer({storage : storage});

//send myArticles page to client
router.get('/myArticles', async(req, res) =>{
    try {
        let articles =await Article.find({author : req.session.user._id});
        res.render('pages/myArticles', {user : req.session.user, articles : articles});
    } catch (error) {
        console.log(error);
    }
    
});

router.get('/newArticle', (req,res) =>{
    res.render('pages/newArticle');
});

router.post('/uploadArticle', (req, res) =>{
    const upload = uploadArticle.single('article');

    upload(req, res, (err) => {

        if(!req.body.title || !req.body.abstract || !req.file.filename){
            return res.render('pages/newArticle', {message : "!!لطفا تمام قیلد ها را کامل کنید"});
        }

        const New_Article = new Article ({
            title :req.body.title, 
            abstract : req.body.abstract,
            article : req.file.filename,
            author : req.session.user._id
        });

        New_Article.save((err, article) =>{
            if(err) return res.status(500).send(err);
            res.redirect(303, '/api/articles/myArticles');
       });

    });
});

//delete an article 
router.delete('/delete/:articleId', async(req, res) =>{
    try {
        await Article.findByIdAndDelete({_id : req.params.articleId});
        res.send({redirect : '/api/articles/myArticles'});
    } catch (error) {
        
    }
});

module.exports = router;