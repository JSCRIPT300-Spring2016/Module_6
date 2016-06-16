var express = require('express');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');
var app = express();
var truck = require('./models/truckModel')













var truckRoutes = require('./routes/truckRoutes');

app.use(express.static('public'));

app.use('/trucks', truckRoutes);

app.listen(3000, function (){
  console.log("listening");
});
