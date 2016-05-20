'use strict';
//  in this file create an express application
//  use the middle-ware built into express
//  to serve up static files from public directory (index.html & client.js)
//  you can also serve up css files from the public directory  if you want)
//  you need to support '/trucks' endpoint
// and dynamic route for '/trucks/:name'

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var truckRouter = require('./routes/truckRoutes');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false, }));

app.use('/trucks', truckRouter);

/* eslint-disable no-console */
app.listen(3000, function () {
  console.log('server started on port 3000');
});