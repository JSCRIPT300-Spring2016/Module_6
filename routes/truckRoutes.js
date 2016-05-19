var express = require('express');
var bodyParser = require('body-parser');

var urlEncoded = bodyParser.urlencoded({ extend: false });

var Truck = require('../models/truckModel');

var router = express.Router();

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
  .post(urlEncoded, function (request, response) {
    var truck = new Truck(request.body);

    truck.save(function (error, truck) {
      if (error) {
        response.send(500).send(error);
      } else {
        response.status(201).send(truck);
      }
    });
  })

  router.route('/:name')
    .get(function (request, response) {
      var truckName = request.params.name;

      Truck.findById(truckName, function (error, result) {
        if (error) {
          response.send(500).send(error);
        } else {
          response.send(result);
        }
      });
    })

    .put(urlEncoded, function (request, response) {
      var truckName = request.params.name;
      var update = request.body;

      Truck.findByIdAndUpdate(bookId, update, function (error, affected, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        // this will default to a 200 status
        response.send(result);
      }
    });
    })

    .delete(function (request, response) {
      var truckName = request.params.name;

      Truck.findByIdAndRemove(truckName, function (error) {
        if(error) {
          response.status(500).send(error);
        } else {
          response.status(204).send('removed');
        }
      });
    });

module.exports = router;
