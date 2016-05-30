
'use strict';

var express = require('express');
var mongoose = require('mongoose');
var serveStatic = express.static('public');

var truckRouter = require('./routes/truckRoutes');
var foodTypeRouter = require('./routes/foodTypeRoutes');

// eslint-disable-next-line
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');

var app = express();

app.use( serveStatic );

app.use('/trucks', truckRouter);
app.use('/food-type', foodTypeRouter);

app.listen(3000, function () {
  //console.log('server started on port 3000');
});
