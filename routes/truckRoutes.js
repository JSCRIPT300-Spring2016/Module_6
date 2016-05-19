// Connect to mongodb in this module as this is where
//you'll be making creat/read/delete calls to your database
// use 'mongodb://localhost/foodTruckAPI' for your
//mongoose connection string

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });

var Truck = require('../models/truckModel');

router.route('/')
  .get(function (request, response) {
    Truck.find(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .post(urlEncoded, function (request, response) {//addTruck?
    var truck = new Truck(request.body);

    truck.save(function (error, truck) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(truck);
      }
    });
  });

router.route('/:id')
  //This route returns a single truck object that matches the query
  .get(function (request, response) {
    var truckId = request.params.id;
    Truck.findById(truckId, function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  })
  .put(urlEncoded, function (request, response) {
    var truckId = request.params.id;
    var update = {
      name: request.body.name,
      foodType: request.body.foodType,
      schedule: request.body.schedule,
      payment: request.body.payment,
      description: request.body.description,
      website: request.body.website,
      Facebook: request.body.Facebook,
      Twitter: request.body.Twitter
    };
    // this could also be var update = request.body;

    Truck.findByIdAndUpdate(truckId, update,
    function (error, affected, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        // this will default to a 200 status
        response.send(result);
      }
    });
  })
  //This route removes a specific truck from the foodTrucks list.
  .delete(function (request, response) {
    var truckId = request.params.id;

    Truck.findByIdAndRemove(truckId, function (error) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('removed');
      }
    });
  });
  
module.exports = router;