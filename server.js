const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
app.use(bodyParser.json())
app.use( bodyParser.urlencoded({ extended: true }) );

var methodOverride = require('method-override');
var logger = require('morgan');
var mongoose = require('mongoose');

const expressValidator = require ('express-validator');
var session = require('express-session');
const flash = require('connect-flash');
const passport = require ('passport');

let Article = require ('./models/article');
let Users = require ('./models/user');

const config = require ('./config/database');
mongoose.connect(config.database, {useNewUrlParser: true});
var db = mongoose.connection;


app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))



//error handle and check if conection was made
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongodb CONNECTED');
});

//express session middleware
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));

// Express Messages Middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});


// Express Validator Middleware
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

require('./config/passport')(passport)
app.use(passport.initialize());
app.use(passport.session());

app.get('*', function(req, res, next){
  res.locals.user = req.user || null;
  next();
});

//Pagina de inicio
app.get('/', function (req, res) {
  Article.find({}, function (err, article){

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

//Route para la pagina editar
edit = require ('./routes/edit');
app.use('/edit', edit);

usuarios = require ('./routes/users');
app.use('/users', usuarios);



app.listen(8080);
