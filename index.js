// implement your express server here
var express = require("express");
var mongoose = require("mongoose");

var truckRouter = require("./routes/truckRoutes");

// eslint-disable-next-line no-unused-vars
var db = mongoose.connect("mongodb://localhost/foodTruckAPI");
var app = express();

app.use(express.static("public"));
app.use("/trucks", truckRouter);

app.listen(3000, function() {
    // eslint-disable-next-line no-console
    console.log("Listening on port 3000");
});

