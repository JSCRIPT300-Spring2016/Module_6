/*
** author: Fulin Shen
** created on: May 18, 2016
** description: food type route
*/

var express = require('express');
//var bodyParser = require('body-parser');
var router = express.Router();
var Truck = require('../models/truckModel.js');

router.route('/')
  .get(function(request, response) {
    Truck.distinct('foodType', function(error, results) {
      if(error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  });

router.route('/:type')
.get(function(request, response) {
  var foodType = request.params.type;

  Truck.find({ foodType: { $in: [foodType] } }, function(error, results) {
    if(error) {
      response.status(500).send(error);
    } else {
      response.status(201).send(results);
    }
  });
});

module.exports = router;
