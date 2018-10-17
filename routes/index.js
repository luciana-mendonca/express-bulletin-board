var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

//Create message
router.get('/create', function(req, res){
  res.render('create');
});

module.exports = router;
