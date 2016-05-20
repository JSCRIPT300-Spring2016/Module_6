var express = require('express');
var truckRoutes = require('./routes/truckRoutes');
var app = express();

app.use(express.static('public'));

app.use('/trucks', truckRoutes);

app.listen(3000, function() {
  /*eslint-disable */
  console.log('server started on port 3000');
  /*eslint-enable */
});
