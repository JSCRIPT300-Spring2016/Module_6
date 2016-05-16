<<<<<<< HEAD
var express = require('express');
var bodyParser = require('body-parser');
var urlEncoded = bodyParser.urlencoded({ extend: false });
var router = express.Router();
var Truck = require('../models/truckModel');

router.route('/trucks')
  .get(function(req, res){
    Truck.find(function(error, result){
      if (error){
        res.status(500).send(error);
      } else {
        res.send(result);
      }
    });
  })
  .post(urlEncoded, function(req, res){
    var newTruck = new Truck(req.body);
    newTruck.save(function (error){
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(201).send(newTruck);
      }
    });
  });


router.route('/trucks/:truckId')
  .get(function(req, res){
    var truckId = req.params.truckId;
    Truck.findById(truckId, function(error, result){
      if (error){
        res.status(500).send(error);
      } else {
        res.send(result);
      }
    });
  })
  .delete(function(req, res){
    var truckId = req.params.truckId;
    Truck.findByIdAndRemove(truckId, function(error){
      if (error){
        res.status(500).send(error);
      } else {
        res.status(204).send('removed');
      }
    });
  });

router.route('/food-types')
  .get(function(req, res){
    Truck.find('foodType', 'foodType', function(error, result){
      if (error){
        res.status(500).send(error);
      } else {
        res.send(result);
      }
    });
  });


router.route('/food-types/:food')
  .get(function(req, res){
    var food = req.params.food;
    Truck.find({ foodType: food }, 'name foodType', function(error, result){
      if (error){
        res.status(500).send(error);
      } else {
        res.send(result);
      }
    });
  });


module.exports = router;


=======
>>>>>>> 47600a1c1a52a2c8c6b598047badf8e2d224f9c9
