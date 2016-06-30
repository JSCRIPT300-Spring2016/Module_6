'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var Truck = require('../models/truckModel');

var router = express.Router();

var urlEnc = bodyParser.urlencoded({ extended: false});

router.route('/')
  .get(function (req, resp) {
    Truck.find(function(error, results) {
      if(error) {
        resp.status(500).send(error);
      } else {
        resp.send(results);
      }
    });
  })
  .post(urlEnc, function(req, resp) {
    var newT = new Truck(req.body);
    if (newT) {
      newT.save(function(error, result) {
        if(error) {
          resp.status(500).send(error);
        } else {
          resp.status(201).send(result);
        }
      });
    } else {
      resp.status(400).json('error creating truck');
    }
  });


router.route('/:id')
  .get(function(req, resp) {
    var id = req.params.id;

    Truck.findById(id, function(error, result) {
      if(error) {
        resp.status(500).send(error);
      } else {
        resp.send(result);
      }
    });
  })
  .delete(function(req, resp) {
    var id = req.params.id;

    Truck.findByIdAndRemove(id, function(error, result) {
      if(error) {
        resp.status(500).send(error);
      } else {
        resp.status(200);
      }
    });
  });

module.exports = router;