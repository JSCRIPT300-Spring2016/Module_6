var express = require('express');
var bodyParser = require('body-parser');

var urlEncoded = bodyParser.urlencoded({ extend: false });

// Truck is the Mongoose model we'll use for our data
var Truck = require('../models/truckModel');

var router = express.Router();

router.route('/')
  .get(function (request, response) {
      // find called with a callback executes immediately
      Truck.find(function (error, results) {
          if (error) {
              response.status(500).send(error);
          } else {
              response.send(results);
          }
      });
  })
  .post(urlEncoded, function (request, response) {
      var newTruck = new Truck(request.body);

      if (newTruck) {
          newTruck.save(function (error, results) {
              if (error) {
                  response.status(500).send(error);
              } else {
                  response.status(201).send(results);
              }
          });
      } else {
          response.status(400).json('error creating truck');
      }
  });

router.route('/:id')
  .get(function (request, response) {
      var truckId = request.params.truckId;

      // use the findById method available on the mongoose model
      // the id is the only parameter it takes (other than a callback)
      Truck.findById(truckId, function (error, results) {
          if (error) {
              response.status(500).send(error);
          } else {
              response.send(results);
          }
      });
  })
  .delete(function (request, response) {

      var truckId = request.params.truckId;

      Truck.findByIdAndRemove(truckId, function (error) {
          if (error) {
              response.status(500).send(error);
          } else {
              response.status(204).json('truck removed');
          }
      });
  });

module.exports = router;