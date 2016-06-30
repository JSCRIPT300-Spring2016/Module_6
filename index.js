'use strict';

var express = require('express');
var truckRouter = require('./routes/truckRoutes');
var foodTypesRouter = require('./routes/foodTypeRoutes');
var mongoose = require('mongoose');

var app = express();

var db = mongoose.connect('mongodb://localhost/foodTruckAPI');

app.use(express.static('public'));
app.use('/trucks', truckRouter);
app.use('/food-type', foodTypesRouter);

app.listen(3000, function () {
  console.log('listening on port 3000');
});