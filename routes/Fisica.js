const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('Fisica', [{title : 'Fisica'}, {logeado: true}])
});

module.exports = router;
