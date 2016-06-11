var express = require('express');

// Truck is the Mongoose model we'll use for our data
var Truck = require('../models/truckModel');

var router = express.Router();

router.route('/')
    .get(function (request, response) {
        Truck.distinct('foodType', function (error, results) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.send(results);
            }
        });
    });

router.route('/:type')
    .get(function (request, response) {
        var foodType = request.params.type;

        Truck.find({ foodType: { $in: [foodType] } }, function (error, results) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.send(results);
            }
        });
    });

module.exports = router;