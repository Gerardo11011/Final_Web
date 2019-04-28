const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var methodOverride = require('method-override');
var logger = require('morgan');
var mongoose = require('mongoose');

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(jsonParser);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
});

index = require ('./routes/index');
app.use('/index', index);

astronomia = require ('./routes/Astronomia');
app.use('/Astronomia', astronomia);

fisica = require ('./routes/Fisica');
app.use('/Fisica', fisica);

contacto = require ('./routes/Contacto');
app.use('/Contacto', contacto);

matematica = require ('./routes/Matematica');
app.use('/Matematica', matematica);

login = require ('./routes/Login');
app.use('/Login', login);

app.listen(8080);
