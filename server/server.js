var express = require('express');
var routes = require('./routes');

var port = '8008';

var app = express();

app.use(express.static(__dirname + '/../public'));
app.use('/', routes);

app.listen(port, function() {
  console.log(`Listening to port ${port}`);
});