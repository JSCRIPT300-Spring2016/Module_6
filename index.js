/*
** author: Fulin Shen
** created on: May 16, 2016
** description: see above
*/

var express = require('express');
var mongoose = require('mongoose');
var truckRouter = require('./routes/truckRoutes');
var foodTypeRouter = require('./routes/foodTypeRouter');

var app = express();

app.use(express.static('public'));
app.use('/trucks', truckRouter);
app.use('/food-types', foodTypeRouter);

app.listen(3000, function(){
  console.log('listening on port 3000');
});
