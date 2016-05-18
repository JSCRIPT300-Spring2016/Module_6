var express = require( 'express' );
var bodyParser = require( 'body-parser' );
var urlEncoded = bodyParser.urlencoded({ extend: false });
var Truck = require( '../models/truckModel' );
var router = express.Router();

router.route( '/' )
  .get(function ( request, response ) {
    Truck.distinct( 'foodType', function( error, results ) {
      if ( error ) {
        response.status( 500 ).send( error );
      } else {
        response.json( results );
      }
    });
  });

router.route( '/:type' )
  .get(function ( request, response ) {
    var foodType = request.params.type;
    Truck.find({ foodType: { $in: [foodType] } }, function( error, results ) {
      if ( error ) {
        response.status( 500 ).send( error );
      } else {
        response.json( results );
      }
    });
  });

module.exports = router;