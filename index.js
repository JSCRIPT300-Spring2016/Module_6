'use strict';
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var serveStatic = express.static('public');

var truckRouter = require('./routes/truckRoutes');

var db = mongoose.connect('mongodb://localhost/foodTruckAPI');
var app = express();

app.use( serveStatic );
app.use( bodyparser.urlencoded({ extended: false }) );
app.use( bodyparser.json() );

app.use( '/trucks', truckRouter );

app.listen(3000, function () {
  console.log('server started on port 3000');
});
