var express = require('express');
var port = '8008';

var app = express();

app.listen(port, function() {
  console.log(`Listening to port ${port}`);
});