// implement your express server here

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');

var truckRoutes = require('./routes/truckRoutes');
var foodTypeRoutes = require('./routes/foodTypeRoutes');

app.use(express.static('public'));

app.use('/trucks', truckRoutes);
app.use('/food-types', foodTypeRoutes);

app.listen(3000, function() {
  console.log('3000');
});
