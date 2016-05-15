var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var urlEncoded = bodyParser.urlencoded({ extend: false });
var Truck = require( '../models/truckModel' );
var router = express.Router();

router.route( '/' )
  .get( function( request, response ) {
    Truck.find( function( error, results ) {
      if ( error ) {
        response.status( 500 ).send( error );
      } else {
        response.json( results );
      }
    });
  })
  .post( urlEncoded, function( request, response ) {
    var newTruck = new Truck( request.body );
    newTruck.save( function( error, newTruck ) {
      if ( error ) {
        response.status( 500 ).send( error );
      } else {
        response.status( 201 ).send( newTruck );
      }
    });
  });

router.route( '/:truckId' )
  .get( function( request, response ) {
    var truckId = request.params.truckId;

    Truck.findById( truckId, function( error, results ) {
      if ( error ) {
        response.status( 500 ).send( error );
      } else {
        response.json( results );
      }
    });
  })
  .delete( function( request, response ) {

    var truckId = request.params.truckId;

    Truck.findByIdAndRemove( truckId, function( error ) {
      if ( error ) {
        response.status( 500 ).send( error );
      } else {
        response.status( 204 ).send( 'removed' );
      }
    });
  });

/*  NOT USED BY THIS APPLICATION
app.route('/food-types')
  .get(function (request, response) {
    var foodList = trucks.getFoodTypes();
    response.send(foodList);
  });

app.route('/food-types/:type')
  .get(function (request, response) {
    var foodType = request.params.type;
    var truckList = trucks.filterByFoodType(foodType);
    response.send(truckList);
  });
*/

module.exports = router;