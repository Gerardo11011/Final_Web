const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webDB', {useNewUrlParser: true});
var db = mongoose.connection;
var article = require ('../models/article')


router.get('/', function (req, res, next) {
  article.find({}, function (err, article){

    if(err){
       console.log(err);
    }
    else {
       console.log(article);
       res.render('Fisica', {title : 'Fisica', logeado: false, articles: article});
    }
  });

  // let articles = [
    // {
    // id : 1,
    // title : 'Agujero negro',
    // autho : 'Gerardo Ponce',
    // body : 'este es el cuerpo de agujero negro'
  // },
  // {
  // id : 2,
  // title : 'Agujero blanco',
  // autho : 'Gerardo gomez',
  // body : 'este es el cuerpo de agujero blanco'
// }];
//
  // res.render('Fisica', {title : 'Fisica', logeado: false, articles: articles});
//
});

module.exports = router;
