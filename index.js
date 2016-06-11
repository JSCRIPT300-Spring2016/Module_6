var express = require('express');
var mongoose = require('mongoose');

var truckRouter = require('./routes/truckRoutes.js');
var foodTypesRouter = require('./routes/foodTypeRoutes.js');

//Connecting to MongoDB
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');
var app = express();

app.use(express.static('public'));

app.use('/trucks', truckRouter);
app.use('/food-types', foodTypesRouter);

app.listen(3000, function () {
    console.log('listening on port 3000');
});