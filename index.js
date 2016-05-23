var express = require('express');
var mongoose = require('mongoose');

var truckRouter = require('./routes/truckRoutes');
var foodTypeRouter = require('./routes/foodTypeRoutes');



var app = express();
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');
//var query = Truck.find();

app.use(express.static('public'));
//app.use(bodyParser.urlencoded({ extended: false }));

app.use('/trucks', truckRouter);
app.use('/food-types', foodTypeRouter);


app.listen(3000, function () {
  console.log('listening on port 3000');
});