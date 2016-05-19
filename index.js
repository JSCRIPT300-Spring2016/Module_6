var express = require('express');
var truckRouter = require('./routes/truckRoutes');
var foodTypesRouter = require('./routes/foodTypesRoutes');
var app = express();
var mongoose = require('mongoose');
/*eslint-disable no-unused-vars*/
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');
/*eslint-enable no-unused-vars*/

app.use(express.static('public'));
app.use('/trucks', truckRouter);
app.use('/food-types', foodTypesRouter);

app.listen(3000, function () {
  /* eslint-disable no-console */
  console.log('listening on port 3000');
  /* eslint-enable no-console */
});