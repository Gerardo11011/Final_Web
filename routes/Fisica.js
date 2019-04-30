const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webDB', {useNewUrlParser: true});
var db = mongoose.connection;
var article = require ('../models/article')



router.get('/', function (req, res, next) {
  article.find({'tema': 'Fisica'}, function (err, article){

    if(err){
       console.log(err);
    }
    else {
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

 router.get('/:id', function (req, res, next) {
   article.findById(req.params.id, function (err, article) {
     res.render('Article', {article: article})
     return;
   });
 });

 router.get('/edit_Article/:id', function (req, res, next){
   article.findById(req.params.id, function (err, article) {
     res.render('edit_Article', {article: article})
     return;
   });
 });

module.exports = router;
