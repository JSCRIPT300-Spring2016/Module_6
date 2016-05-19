// Connect to mongodb in this module as this is where
//you'll be making create/read/delete calls to your database
// use 'mongodb://localhost/foodTruckAPI' for your
//mongoose connection string

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
/*eslint-disable no-unused-vars*/
var urlEncoded = bodyParser.urlencoded({ extended: false });
/*eslint-enable no-unused-vars*/
var Truck = require('../models/truckModel');

router.route('/')
  //This route returns the list of all possible food types served
  .get (function (request, response) {
    Truck.distinct('foodType', function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  });
  
router.route('/:type')
  //This route returns the list of all trucks that serve the food
  //type that matches the type parameter passed into the route.
  .get(function (request, response) {
    var foodType = request.params.type;
	
	//ensures that the first letter of the queried foodType is upper case
    foodType = foodType.slice(0,1).toUpperCase() +
      foodType.slice(1, foodType.length);
	
    Truck.find({ foodType: { $in: [foodType] } }, function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.json(result);
      }
    });
  });
  
module.exports = router;