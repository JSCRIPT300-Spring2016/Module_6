/*eslint-env node*/

//express
var express = require('express');

//router
var router = express.Router();

//the food trucks
var foodTruck = require('../models/truckModel');

router.route('/')
.get(function (request, response) {

    //return all the trucks
  foodTruck.find().exec(function (err, result) {

    if (err) {

            //sorry error getting trucks
        response.status(500).send(err);
      } else {

            //yay saved
        response.send(result);
      }

  });
})

.post(function (request, response) {

    //create the new truck
  var newFoodTruck = new foodTruck(request.body);

    //save it
  newFoodTruck.save(function (err) {
    if (err) {

            //sorry error saving
        response.status(500).send(err);
      } else {

            //yay saved
        response.status(201).send(newFoodTruck);
      }
  });
});

router.route('/:name')
.get(function (request, response) {

    //find the food truck, changing to _id (used to be name)
  foodTruck.find({ _id: request.params.name }, function (err, result) {
    if (err) {

            //sorry no truck
        response.status(404).json('no truck found: ' + request.params.name);
      } else {

            //yay found truck
        response.send(result);
      }
  });
})

.delete(function (request, response) {

  foodTruck.findOneAndRemove({ name: request.params.name }, function(err){
    if (err) {

            //sorry failed to delete
        response.status(404).json('no truck found: ' + request.params.name);
      } else {

            //yay found truck
        response.status(200).send('deleted');
      }
  });
});

//export the router!
module.exports = router;