/*
	Scott Henderson
	JSCRIPT 300 A Spring 2016
*/

var express = require("express");
var mongoose = require("mongoose");

var truckRouter = require("./routes/truckRoutes");
var foodTypeRouter = require("./routes/foodTypeRoutes");

var app = express();
/* eslint-disable no-unused-vars */
var db = mongoose.connect("mongodb://localhost/foodTruckAPI");
/* eslint-enable no-unused-vars */

// a middle-ware function without a "mount" path gets executed on every request
app.use(function (request, response, next) {
	console.log("Time: ", Date.now());
	next();
}, function (request, response, next) {
	console.log("Request URL: ", request.originalUrl);
	next();
});

app.use(express.static("public"));
app.use("/trucks", truckRouter);
app.use("/food-types", foodTypeRouter);

app.listen(3000, function () {
	console.log("server started on port 3000");
});
