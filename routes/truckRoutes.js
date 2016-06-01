// Connect to mongodb in this module as this is where you'll be making
// create/read/delete calls to your database
// use 'mongodb://localhost/foodTruckAPI' for your mongoose connection string

'use strict';
// put your Express router code in here

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var express = require('express');
var mongoose = require('mongoose');

var Truck = require('../models/truckModel');

var app = express();
var db = mongoose.connect('mongodb://localhost/foodTruckAPI');

var router = express.Router();

/* eslint-enable no-undef */

// var serveStatic = express.static('public');

/* eslint-disable no-console */

router.route('/')
.get(function (request, response) {
  Truck.find(function (error, trucks) {
    if(error) {
      response.status(500).send(error);
    } else {
      response.json(trucks);
    }
  });
})
.post(function (request, response) {
  var newTruck = new Truck(request.body);

  newTruck.save(function (error) {
    if (error) {
      response.status(500).send(error);
    }
    else {
      response.status(201).send(newTruck);
    }
  });
});

// `/trucks/:name` This route returns a single truck object that matches
// the name parameter passed in the route.
// http://127.0.0.1:3000/trucks:Fez
router.route('/:id')
.get(function (request, response) {
  Truck.findById(request.params.id, function (error, trucks) {
    if(error) {
      response.status(500).send(error);
    } else {
      response.json(trucks);
    }
  });
})
.put(function(request, response) {
  var truckId = request.params.id;
  var update = {
    name: request.body.name,
    foodType: request.body.name,
    schedule: request.body.schedule,
    payment: request.body.payment,
    description: request.body.description,
    website: request.body.website,
    Facebook: request.body.Facebook,
    Twitter: request.body.Twitter,
  };

  Truck.findByIdAndUpdate(truckId, update, function (error, affected, truck) {
    if (error) {
      response.status(500).send(error);
    } else {
      response.sendStatus(204);
      response.end(truck);
    }
  });
})
.delete(function(request, response) {
  Truck.findByIdAndRemove(request.params.id, function (error) {
    if (error) {
      response.status(500).send(error);
    } else {
      response.sendStatus(204);
      response.end('removed');
    }
  });
});

router.route('/:type')
.get(function (request, response) {
// `/food-types/:type` This route returns the list of all trucks that serve the
// food type that matches (case insensitive) the type parameter passed.
// http://127.0.0.1:3000/foodTypes:Pizza
  var typeReq = request.params.type;
  // console.log('request[' + typeReq + ']');
  var type = trucks.filterTrucksByFoodType(typeReq);
  response.send(type);
});

/* eslint-disable no-undef */
module.exports = router; // return the router instance for node