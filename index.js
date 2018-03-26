const env = require("dotenv").config();
const express = require("express");
const app = express();
const port = env.PORT || 3000;

app.use(express.static('./public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(port, function(req, res) {
  console.log("Listening on: " + port);
});
