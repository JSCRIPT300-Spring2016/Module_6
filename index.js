var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var truckRoutes = require('./routes/truckRoutes');

var Truck = require('./models/truckModel');

var app = express();
var db = mongoose.connect('mongodb://localhost/bookAPI');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/trucks', truckRoutes);


app.listen(3000, function () {
  console.log('listening on port 3000');
});