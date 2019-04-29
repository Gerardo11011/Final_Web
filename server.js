const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var methodOverride = require('method-override');
var logger = require('morgan');
var mongoose = require('mongoose');
let Article = require ('./models/article')

mongoose.connect('mongodb://localhost/webDB', {useNewUrlParser: true});
var db = mongoose.connection;

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(jsonParser);


//error handle and check if conection was made
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongodb CONNECTED');
});

//Pagina de inicio
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

//Route para la pagina index
index = require ('./routes/index');
app.use('/index', index);

//Route para la pagina astronomia
astronomia = require ('./routes/Astronomia');
app.use('/Astronomia', astronomia);

//Route para la pagina Fisica
//fisica = require ('./routes/Fisica');
//app.use('/Fisica', fisica);

app.get('/Fisica', function (req,res) {
  Article.find({}, function (err, articles){
    if(err){
      console.log(err);
    }
    else {
      res.render('Fisica', {title : 'Fisica', logeado: false, titulos: articles});
    }
  });
})

//Route para la pagina contacto
contacto = require ('./routes/Contacto');
app.use('/Contacto', contacto);

//Route para la pagina matematica
matematica = require ('./routes/Matematica');
app.use('/Matematica', matematica);

//Route para la pagina login
login = require ('./routes/Login');
app.use('/Login', login);

app.listen(8080);
