var express = require('express');
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extended: false });

var Truck = require('../models/truckModel');

var router = express.Router();

router.route('/')
  .get(function (request, response) {
    Truck.find(function(error, results){
      if(error){
        response.status(500).send(error);
      }else{
        response.send(results);
      }
    })

  })

  .post(urlEncoded, function (request, response) {
    var newTruck = new Truck (request.body);

    newTruck.save(function(error, newTruck){
      if(error){
        response.status(500).send(error);
      }else {
        response.status(201).send(newTruck);
      }
    })
  });

router.route('/:truckId')
  .get(function (request, response) {
    var truckId = request.params.truckId;
    Truck.findById(truckId, function (error, result){
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }

    });
  })

  .put(urlEncoded, function (request, response) {
    var truckId = request.params.truckId;
    var update = {
      name: request.body.name,
      foodType: request.body.foodType,
      schedule: request.body.schedule,
      payment: request.body.payment,
      description: request.body.description,
      website: request.body.website,
      Facebook: request.body.Facebook,
      Twitter: request.body.Twitter
    };

    Truck.findByIdAndUpdate(truckId, update, function (error, affected, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  })

  .delete(function (request, response) {
    var truckId = request.params.truckId;

    Truck.findByIdAndRemove(truckId, function (error) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('removed');
      }
    });
  });

// router.route('/food-types')
//   .get(function (request, response){
//     Truck.distinct('foodType', function (error, results) {
//       if (error) {
//         response.status(500).send(error);
//       } else {
//         response.send(results);
//       }

//     })
//   });

// router.route('/food-types/:type')
//   .get(function (request, response) {
//     var foodType = request.params.type;
//     Truck.find({ foodType: { $in: [foodType] } }, function (error, results) {
//       if (error) {
//         response.status(500).send(error);
//       } else {
//         response.send(results);
//       }
//     });
//   });

module.exports = router;
