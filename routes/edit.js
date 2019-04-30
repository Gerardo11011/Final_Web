const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webDB', {useNewUrlParser: true});
var db = mongoose.connection;
var article = require ('../models/article')

router.get('/:id', function (req, res, next){
  article.findById(req.params.id, function (err, article) {
    console.log(article);
    res.render('edit', {article: article})
    return;
  });
});

module.exports = router;
