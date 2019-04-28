const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next)  {
  res.render('Matematica', [{title : 'Matematicas'}, {logeado: true}])
});


module.exports = router;
