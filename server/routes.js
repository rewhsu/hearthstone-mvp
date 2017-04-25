var express = require('express');
var path = require('path');
var router = express.Router();

router.use(express.static(__dirname + '/public'));

router.get('/', function(req, res) {
  res.send('index here');
})

module.exports = router;