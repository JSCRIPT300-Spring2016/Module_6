/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

var express = require("express");
var bodyParser = require("body-parser");

// Apply body-parser URL encoder middle-ware for just the POST and PUT routes, not the GET route.
var urlEncoded = bodyParser.urlencoded({ extended: false });

// Truck is the Mongoose model we'll use for our data
var Truck = require("../models/truckModel");

var router = express.Router();

router.route("/")
	.get(function (request, response) {
		Truck.find(function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.status(200).json(results);
			}
		});
	})
	.post(urlEncoded, function (request, response) {
		var truck = new Truck(request.body);

		if (truck) {
			truck.save(function (error, result) {
				if (error) {
					response.status(500).send(error);
				} else {
					response.status(201).json(result);
				}
			});
		} else {
			response.status(500).send("Unable to add a new truck.");
		}
	});

router.route("/:id")
	.get(function (request, response) {
		var truckId = request.params.id;

		Truck.findById(truckId, function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.status(200).json(results);
			}
		});
	})
	.put(urlEncoded, function (request, response) {
		var truckId = request.params.id;
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

		Truck.findByIdAndUpdate(truckId, update, function (error, results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.status(200).json(results);
			}
		});
	})
	.delete(function (request, response) {
		var truckId = request.params.id;

		Truck.findByIdAndRemove(truckId, function (error, _results) {
			if (error) {
				response.status(500).send(error);
			} else {
				response.status(204).send("Removed");
			}
		});
	});

module.exports = router;
