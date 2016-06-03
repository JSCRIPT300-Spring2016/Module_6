var express = require("express");
var bodyparser = require("body-parser");

var urlEncoded = bodyparser.urlencoded({ extended: false });

var Truck = require("../models/truckModel");

var router = express.Router();

router.route("/")
    .get(function(request, response) {
        Truck.find(function(error, result) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.send(result);
            }
        });
    })
    .post(urlEncoded, function(request, response) {
        var truck =  new Truck(request.body);
        truck.save(function(error, truck) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.status(201).send(truck);
            }
        });
    });

router.route("/:truckId")
    .get(function(request, response) {
        var truckId = request.params.truckId;
        Truck.findById(truckId, function(error, result) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.send(result);
            }
        });
    })
    .put(urlEncoded, function (request, response) {
        var truckId = request.params.truckId;
        var update = request.body;
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
        Truck.findByIdAndRemove(truckId, function(error) {
            if (error) {
                response.status(500).send(error);
            } else {
                response.status(204).send("removed");
            }
        });
    });

module.exports = router;

