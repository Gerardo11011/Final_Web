const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', {title : 'Derivando el cielo', logeado: false})
});

module.exports = router;