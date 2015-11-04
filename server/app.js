var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passportConfig = require('./config/passport')

//Configuring passport
var passport = require('passport')
var expressSession = require('express-session')
//Configuring passport

var routes = require('./routes/index');
var users = require('./routes/users');
var auth = require('./routes/auth');
var api = require("./routes/api");

var app = express();

mongoose.connect('mongodb://localhost/passport-twitter')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var CORS = function(req, res, next) {
res.header('Access-Control-Allow-Credentials', true);
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
res.header('Access-Control-Allow-Headers', 'Content-Type');
// some browsers send a pre-flight OPTIONS request to check if CORS is enabled so you have to also respond to that
if ('OPTIONS' === req.method) {
  res.send(200);
}
else {
  next();
}
};

app.use(CORS);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(expressSession({secret: 'secret'}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', auth);
app.use('/', routes);
app.use('/users', users);
require('./routes/api')(app);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
