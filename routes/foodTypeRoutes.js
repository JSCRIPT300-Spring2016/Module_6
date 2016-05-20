/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

var express = require("express");

// Truck is the Mongoose model we'll use for our data
var Truck = require("../models/truckModel");

// the Router method returns an instance which can be mounted as middle-ware
var router = express.Router();

// the path we mount the router on is relative to where it was mounted in app.js
router.route("/")
	.get(function (request, response) {
		Truck.distinct(
			"foodType",
			function (error, results) {
				if (error) {
					response.status(404).send("No food types found!");
				} else {
					var formattedFoodList = "All available food types:<br><br>";

					// results is an array of food type strings
					results.sort(function (a, b) {
						return a.toLowerCase().localeCompare(b.toLowerCase());
					});
					for (var i = 0; i < results.length; ++i) {
						formattedFoodList += results[i] + "<br>";
					}
					response.send(formattedFoodList);
				}
			});
	});

router.route("/:type")
	.get(function (request, response) {
		// get a list of trucks that serve a given food type
		var foodType = request.params.type;

		Truck.find(
			// for improved search performance, de-normalize the data by storing a
			// lower-case foodType string then searching without RegExp, this will
			// use an index (if present)
			{ foodType: { $in: [new RegExp("^" + foodType.toLowerCase(), "i")] } },
			function (error, results) {
				if (error) {
					response.status(404).send("No trucks found for food type '" +
						foodType + "'.");
				} else {
					var formattedTruckList = "Food trucks that serve " + foodType + ":<br><br>";

					// results is a list of food truck objects, sort by name
					results.sort(function (a, b) {
						return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
					});
					for (var i = 0; i < results.length; ++i) {
						formattedTruckList += results[i].name + "<br>";
					}
					response.send(formattedTruckList);
				}
			});
	});

module.exports = router;
