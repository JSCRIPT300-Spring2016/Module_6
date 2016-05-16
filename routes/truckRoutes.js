var express = require('express');

var Truck = require('../models/truckModel');

var router = express.Router();

router.route('/')
  .get(function (request, response) {
  
    //get truck by name
    var query = {
      name: request.query.name
    };


    Truck.find(function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  });

router.route('/:truckId')
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

module.exports = router;
