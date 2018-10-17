var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('create');
});

//All Messages
router.get('/messages', function(req, res){
  res.render('messages');
});

module.exports = router;
