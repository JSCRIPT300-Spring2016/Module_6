var express = require('express');
var mongoose = require('mongoose');

var truckRoutes = require('./routes/truckRoutes');
var foodTypeRoutes = require('./routes/foodTypeRoutes')



var app = express();
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');
var query = Truck.find();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/truck', truckRoutes);
app.use('/food-type', foodTypeRoutes);


app.listen(3000, function () {
  console.log('listening on port 3000');
});