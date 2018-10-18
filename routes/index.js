var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = 'postgres://' + process.env.POSTGRES_USER + ':' + process.env.POSTGRES_PASSWORD + '@localhost/bulletinboard';
var client = new pg.Client(connectionString);
client.connect();

// Index - Create Message
router.get('/', function(req, res) {
  res.render('create');
});

router.post('/create', function(req, res) {
  client.query('INSERT INTO messages(title, body) VALUES($1, $2)', [req.body.addTitle, req.body.addMessage]);
    res.redirect('/messages');
});

//All Messages
router.get('/messages', function(req, res){
  client.query('SELECT * FROM messages', function(err, result) {
    if(err) {
      return console.log('Error returning query', err);
    }
    res.render('messages', {messages: result.rows});
    // client.end();
  });
});

module.exports = router;
