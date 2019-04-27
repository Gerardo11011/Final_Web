const express = require('express');
const app = express();
const path = require('path');
var router = express.Router();

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/Astronomia.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/Astronomia.html'));
});

app.get('/Fisica.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/Fisica.html'));
});

app.get('/Matematica.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/Matematica.html'));
});

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/Contacto.html', function (req, res) {
  res.sendFile(path.join(__dirname, '/Contacto.html'));
});


app.use('/', router);


app.listen(8080);
