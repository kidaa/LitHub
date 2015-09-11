var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');

var app = express();
app.use(session({secret: '123'}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));

require('./config/routes.js')(app);

app.listen(7000, function() {
  	console.log('listening on port: 7000');
});
