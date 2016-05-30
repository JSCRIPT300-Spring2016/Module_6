var express = require('express');
var bodyParser = require('body-parser');

var Truck = require('../models/truckModel');

var urlEncoded = bodyParser.urlencoded({ extended: false });

var router = express.Router();

router.route('/')
  .get(function(request, response) {
    Truck.find(function(error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .post(urlEncoded, function(request, response) {
    var truck = new Truck(request.body);

    truck.save(function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  });

router.route('/:id')
  .get(function(request, response) {
    var truckId = request.params.id;
    Truck.findById(truckId, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .delete(function(request, response) {
    Truck.findByIdAndRemove({ _id: request.params.id }, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('removed');
      }
    });
  });

module.exports = router;
