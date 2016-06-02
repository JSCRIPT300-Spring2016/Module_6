var expressStuff = require('express');
var mongooseStuff = require('mongoose');

var truckRouter = require('./routes/truckRoutes');
var foodTypeRouter = require ('./routes/foodTypeRoutes');

// Connect to the foodTruckAPI database.
// Took out the portion "var db = mongoose.connect(...)"
// because the var db is not used. The var db would be
// useful for some other applications.
mongooseStuff.connect('mongodb://localhost/foodTruckAPI');
var app = expressStuff();

// Allow the use of html, css (static files) when routes are hit.
app.use(expressStuff.static('public'));

app.use('/trucks', truckRouter);
app.use('/foodTypes', foodTypeRouter);

app.listen(3000, function () {
});