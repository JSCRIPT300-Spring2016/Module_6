var express = require( 'express' );
var mongoose = require( 'mongoose' );
var truckRouter = require( './routes/truckRoutes.js' );
var foodTypeRouter = require( './routes/foodTypeRoutes.js' );
var db = mongoose.connect( 'mongodb://localhost/foodTruckAPI' );
var app = express();

app.use( express.static( 'public' ) );

app.use( '/trucks', truckRouter );

app.use( '/food-types', foodTypeRouter );

app.listen( 3000, function() {
  console.log( 'listening on port 3000' );
});