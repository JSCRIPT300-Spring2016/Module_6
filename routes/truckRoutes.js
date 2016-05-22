// Connect to mongodb in this module as this is where you'll be making creat/read/delete calls to your database
// use 'mongodb://localhost/foodTruckAPI' for your mongoose connection string
var express = require('express');
//var trucks = require('../foodTrucks');
var router = express.Router();
var Truck = require('../models/truckModel');


//NEXT STEP REWRITE THESE AS MONGODB THINGIES. WATCH VIDEO THEN DO!
router.route('./trucks')
  .get(function(request, response) {
  	Truck.distinct('foodType', function (error, results){});
  })
  //see other lines from slack
  .get(function (request, response) {
    Truck.find(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .post(function (request, response) {
    var truck = new Truck(request.body);

    truck.save(function (error, book) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(book);
      }
    });
  });

router.route('./trucks/:name')
  .get(function (request, response) {
     var truckId = request.params.truckId;

     Truck.findById(truckId, function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  });

router.route('/food-types')
  Truck.distinct('foodType', function (error, results) {
    var foodList = trucks.getFoodTypes();
    if (error) {
        response.status(500).send(error);
      } else {
        response.send(foodList);
      }  
  });
 
router.route('/food-types/:type')
  Truck.find({ foodType: { $in: [foodType] } }, function (error, results) {
    var type = request.params.type;
    var truckList = trucks.filterTrucksByFoodType(type);
    if (error) {
      response.status(500).send(error);
    } else {
      response.send(truckList);
    }
  });



module.exports = router;