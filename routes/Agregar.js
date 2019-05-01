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
  req.checkBody('titulo','titulo es requerido').notEmpty();
  req.checkBody('autor','autor es requerido').notEmpty();
  req.checkBody('cuerpo','cuerpo es requerido').notEmpty();
  req.checkBody('bibliografia','bibliografia es requerido').notEmpty();
  req.checkBody('tema','tema es requerido').notEmpty();

   // Get Errors
   let errors = req.validationErrors();

   if(errors){
     res.render('Agregar', {title : 'Agregar', logeado: false, errors: errors})
   } else {
     let art = new article();
     art.titulo = req.body.titulo
     art.tema = req.body.tema
     art.autor = req.body.autor
     art.cuerpo = req.body.cuerpo
     art.bibliografia = req.body.bibliografia

     art.save(function(err){
       if(err){
         console.log(err);
         return;
       }
       else {
         req.flash('Exito','Articulo añadido');
         res.redirect('/');
       }
     });
  }
});


module.exports = router;
