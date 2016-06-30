'use strict';

var express = require('express');

var Truck = require('../models/truckModel');

var router = express.Router();

router.route('/')
  .get(function (req, resp) {
    
    Truck.distinct('foodType', function (error, results) {
      if(error) {
        resp.status(500).send(error);
  	  } else {
  		resp.send(results);
  	  }
  	});
  });

router.route('/:type')
  .get(function (req, resp) {
    var foodType = req.params.type;

    Truck.find({ foodType: { $in: [foodType] } }, function (error, results) {
	   if(error) {
	     resp.status(500).send(error);
	    } else {
	  	  resp.send(results);
	  	}
	});
});

module.exports = router;