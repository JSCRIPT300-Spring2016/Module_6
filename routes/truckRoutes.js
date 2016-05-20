// Connect to mongodb in this module as this is where you'll be making
//creat/read/delete calls to your database
// use 'mongodb://localhost/foodTruckAPI' for your mongoose connection string
var express = require('express');
var mongoose = require('mongoose');
var foodKind;
/*eslint-disable */
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');
/*eslint-enable */
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({
  extended: false
});

var Truck = require('../models/truckModel');

app.param('type', function(request, response, next) {
  foodKind = request.params.type;
  var foodType = foodKind;
  request.foodType = foodType;
  next();
});

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

    truck.save(function(error, book) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(book);
      }
    });
  });
router.route('/:name')
  .get(function(request, response) {
    var truck = request.params.name;
    Truck.findOne({
      _id: truck
    }, function(error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });

  })
  .delete(function(request, response) {
    var truck = request.params.name;
    Truck.remove({
      _id: truck
    }, function(error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  });


module.exports = router;
