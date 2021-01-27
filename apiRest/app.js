var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRoute = require('./routes/index');
var animaliaRoute = require('./routes/animalia');
var plantaeRoute = require('./routes/plantae');
var fungiRoute = require('./routes/fungi');

var app = express();
app.use(new cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoute);
app.use('/animalia', animaliaRoute);
app.use('/plantae', plantaeRoute);
app.use('/fungi', fungiRoute);

module.exports = app;
