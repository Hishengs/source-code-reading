var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.listen(8002, function(){
  console.log('express is running at 8002');
});