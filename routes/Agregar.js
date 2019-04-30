const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webDB', {useNewUrlParser: true});
var db = mongoose.connection;
var article = require ('../models/article')



router.get('/', function (req, res, next) {
  res.render('Agregar', {title : 'Agregar', logeado: false})
});

router.post('/', function (req, res, next){
  let art = new article();
  art.titulo = req.body.titulo
  art.tema = req.body.tema
  art.autor = req.body.autor
  art.cuerpo = req.body.cuerpo
  art.bibliografia = req.body.bibliografia
  art.id = req.body.id

  art.save(function(err){
    if (err) {
      console.log(err);
      return;
    }
    else {
      res.redirect('/index')
    }
  });
});


module.exports = router;
