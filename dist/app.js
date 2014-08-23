// Node modules
var sys = require('sys');
var http = require('http');
var fs = require('fs');

// Express modules
var express = require('express');
// var session = require('cookie-session');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var handlebars = require('handlebars');
// var logger = require('morgan');

// Misc 3rd party modules

// Initialize express and OSC client
var app = express();
var router = express.Router();

// Set up environment-specific express data
var serverRoot = __dirname;

// Configure express app

//.use(logger())
// app.use(bodyParser())
  // .use(session({
  //   secret: "secret",
  //   cookie: {"gepetto": {}}
  // }));
app.use('/js', express.static(serverRoot + "/js"));
app.use('/css', express.static(serverRoot + "/css"));
app.use('/img', express.static(serverRoot + "/img"));
app.use("/", express.static(serverRoot);

//// Serve assets & index page
router.get('/', function(req, res) {

});



http.createServer(app).listen(3000);

