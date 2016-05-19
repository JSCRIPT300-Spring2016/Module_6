// Connect to mongodb in this module as this is where you'll be making creat/read/delete calls to your database
// use 'mongodb://localhost/foodTruckAPI' for your mongoose connection string
/*
** author: Fulin Shen
** created on: May 15, 2016
** description: see above
*/

var express = require('express');
var bodyParser = require('body-parser');

var urlEncoded = bodyParser.urlencoded({ extended: false });
var Truck = require('../models/truckModel');
var router = express.Router();

router.route('/')
  .get(function(request, response) {
    Truck.find(function(error, results) {
      if(error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .post(urlEncoded, function(request, response) {
    var truck = new Truck(request.body);

    truck.save(function(error, truck) {
      if(error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(truck);
      }
    });
  });

router.route('/:truckId')
  .get(function(request, response) {
    var truckId = request.params.truckId;

    Truck.findById(truckId, function(error, results) {
      if(error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(results);
      }
    });
  })
  .delete(function(request, response) {
    var truckId = request.params.truckId;

    Truck.findByIdAndRemove(truckId, function(error) {
      if(error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('removed');
      }
    });
  });

module.exports = router;
