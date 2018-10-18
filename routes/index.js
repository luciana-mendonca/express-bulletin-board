var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';
var client = new pg.Client(connectionString);
client.connect();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('create');
});

//All Messages
router.get('/messages', function(req, res){
  client.query('SELECT * FROM messages', function(err, result) {
    if(err) {
      return console.error('Error returning query', err);
    }
    console.log(result.rows);
    res.render('messages', {messages: result.rows});
    client.end();
  });
});

module.exports = router;
