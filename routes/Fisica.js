const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webDB', {useNewUrlParser: true});
let Article = require ('../models/article')


router.get('/', function (req, res, next) {
  Article.find({}, function (err, article){
    if(err){
      console.log(err);
    }
    else {
      res.render('Fisica', {title : 'Fisica', logeado: false, articles: article});
    }
  });

});

module.exports = router;
