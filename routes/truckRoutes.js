// put your Express router code in here
var stuffFromExpress = require('express');

// BodyParser is needed for reading POST data from client
var stuffFromBodyParser = require('body-parser');

// The mongoose Schema truckModel
var TruckModelStuff = require('../models/truckModel');

// the Router method returns an instance which can be mounted as middle-ware
var routerStuff = stuffFromExpress.Router();

// Notes:
// bodyParser.urlencoded returns middle-ware function.
// So urlEncoded is now a middle-ware function.
// 'extended: false' because JSON is not needed.
var urlEncoded = stuffFromBodyParser.urlencoded({ extended: false });

routerStuff.route('/')
  .get(function (request, response) {
    // This route returns the list of all trucks in the module
    // if the query is empty.  Otherwise, the truck(s) that matched
    // the query is/are returned.
    // For example, '127.0.0.1:3000/trucks' gives all trucks.
	// '127.0.0.1:3000/trucks?name=Flair Taco' gives the Flair Taco truck.

    // Control what kinds of data can be queried via the
    // query string.
    var query = {};
	
    if (request.query.name) {
      query.name = new RegExp(request.query.name, 'i');
    }
	
    TruckModelStuff.find(query, function (error, results) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(results);
      }
    });
  })
  .post(urlEncoded, function (request, response) {
    // This route adds a new truck object to the foodTrucks list.

    // truckToBeAdded contains the data from the client's form
    var truckToBeAdded = new TruckModelStuff(request.body);

    truckToBeAdded.save(function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(201).send(result);
      }
    });
  });

routerStuff.route('/:truckId')
  // This route finds a truck by the specified truckId.
  .get(function (request, response) {
    var truckId = request.params.truckId;

    TruckModelStuff.findById(truckId, function (error, result) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.send(result);
      }
    });
  })
  .delete(function (request, response) {
    var truckId = request.params.truckId;

    TruckModelStuff.findByIdAndRemove(truckId, function (error) {
      if (error) {
        response.status(500).send(error);
      } else {
        response.status(204).send('The truck has been removed.');
      }
    });
  });

module.exports = routerStuff;
