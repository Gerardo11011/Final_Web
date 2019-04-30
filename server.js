const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var methodOverride = require('method-override');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webdb', {useNewUrlParser: true});
var db = mongoose.connection;
let Article = require ('./models/article')



app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//error handle and check if conection was made
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongodb CONNECTED');
});

//Pagina de inicio
app.get('/', function (req, res) {
  Article.find({}, function (err, art){

    if(err){
       console.log(err);
    }
    else {
       res.render('index', {title : 'index', logeado: false, article: article});
    }
  });
});

//Route para la pagina index
index = require ('./routes/index');
app.use('/index', index);

//Route para la pagina astronomia
astronomia = require ('./routes/Astronomia');
app.use('/Astronomia', astronomia);

//Route para la pagina Fisica
fisica = require ('./routes/Fisica');
app.use('/Fisica', fisica);

// app.get('/Fisica', function (req,res) {
  // Article.find({}, function (err, articles){
    // if(err){
      // console.log(err);
    // }
    // else {
      // res.render('Fisica', {title : 'Fisica', logeado: false, titulos: articles});
    // }
  // });
// })

//Route para la pagina contacto
contacto = require ('./routes/Contacto');
app.use('/Contacto', contacto);

//Route para la pagina matematica
matematica = require ('./routes/Matematica');
app.use('/Matematica', matematica);

//Route para la pagina login
login = require ('./routes/Login');
app.use('/Login', login);

//Route para la pagina Agregar
agregar = require ('./routes/Agregar');
app.use('/Agregar', agregar);


app.listen(8080);
