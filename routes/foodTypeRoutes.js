// put your Express router code in here
var stuffFromExpress = require('express');

// The mongoose Schema truckModel
var TruckModelStuff = require('../models/truckModel');

// the Router method returns an instance which can be mounted as middle-ware
var routerStuff = stuffFromExpress.Router();

routerStuff.route('/')
  .get(function (request, response) {
    // This route returns the list of all distint food types in
    // the module.
	
    TruckModelStuff.distinct('foodType', function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        if ((Array.isArray(results)) &&
            (results.length > 0)) {
          results.sort();
        }
        response.send(results);
      }
    });
  });

routerStuff.route('/:type')
  .get(function (request, response) {
    var food_Type = request.params.type;

    // Construct the query object to find trucks of the specified food type.
    var query = {};
    var foodTypeRE = new RegExp(food_Type, 'i');
    query.foodType = foodTypeRE;
	
    TruckModelStuff.find(query, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  });

module.exports = routerStuff;