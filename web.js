var express = require('express');
var app = express();
var fs = require('fs');

app.use(express.logger());

var buffer= fs.readFileSync('index.html');


app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
