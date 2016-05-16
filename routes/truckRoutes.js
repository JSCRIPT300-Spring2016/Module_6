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
        response.status(201);
      }
    });
  });

router.route('/:name')
  .get(function(request, response) {
    var truckName = request.params.name;
    Truck.find(truckName, 'name', function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .delete(function(request, response) {
    Truck.findOneAndRemove({ name: request.params.name }, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('removed');
      }
    });
  });

module.exports = router;
