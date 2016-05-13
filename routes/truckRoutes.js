// Connect to mongodb in this module as this is where you'll be making creat/read/delete calls to your database
// use 'mongodb://localhost/foodTruckAPI' for your mongoose connection string
var express = require('express');
//var trucks = require('../foodTrucks');
var router = express.Router();


//NEXT STEP REWRITE THESE AS MONGODB THINGIES. SEE SLIDE DECK!
router.route('./trucks')
  .get(function (request, response) {
    var truckList = trucks.getTrucks();
    response.send(truckList);
  })
  .post(function (request, response) {
    var truckList = trucks.addTruck;
    response.send(truckList);
  });

router.route('./trucks/:name')
  .get(function (request, response) {
    var truck = trucks.getTruck(request.params.name);
    response.send(truck);
  })
  .delete(function (request, response) {
    var truckList = trucks.removeTruck();
    response.send(truckList);
  });

router.route('/food-types')
  .get(function (request, response){
    var foodList = trucks.getFoodTypes();
    response.send(foodList);
  });
  
router.route('/food-types/:type')
  .get( function (request, response){
    var type = request.params.type;
    var truckList = trucks.filterTrucksByFoodType(type);
    response.send(truckList);
  });


module.exports = router;