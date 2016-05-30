var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var Truck = require('../models/truckModel');

var urlEncoded = bodyParser.urlencoded({ extended: false });

var router = express.Router();


var router = express.Router();

router.route('/')
  .get(function(request, response) {
    Truck.find(function(error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        var foodTypes = _.map(results, function(truck) {
          return truck.foodType;
        });
        response.send(foodTypes);
      }
    });
  });

router.route('/:type')
  .get(function(request, response) {
    var type = request.params.type;
    var type = type[0].toUpperCase() + type.slice(1, type.length);
    Truck.find(function(error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        var matchingTrucks = _.filter(results, function(truck) {
          return truck.foodType.indexOf(type) !== -1;

        });
        if (matchingTrucks.length > 0) {
          response.send(matchingTrucks);
        } else {
          response.send('Oh no! You can\'t eat that from a truck!');
        }
      }
    });
  });

module.exports = router;
