var express = require('express');
var bodyParser = require('body-parser');

var Truck = require('../models/truckModel');
var router = express.Router();

//middleware function to pass to route handler
var urlEncoded = bodyParser.urlencoded({ extended: false });

router.route('/')
  .get(function (request, response) {
    Truck.find(function(error, results) {
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
      newTruck.save(function (error, result) {
        if (error) {
          response.status(500).send(error);
        } else {
          response.status(201).send(result);
        }
      });
    } else {
      response.ststus(400).json('error creating truck')
    }
  });

router.route('/:id')
  .get(function (request, response) {
    var id = request.params.id;

    Truck.findById(id, function (error, result) {
      if (error) {
        response.status(500).send(result);
      } else {
        response.send(result);
      }
   });
  })
  .delete(function (request, response) {
    var id = request.params.id ;
    Truck.findByIdAndRemove(id, function (error) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(200).json('truck removed')
      }
    });
  });

module.exports = router;
