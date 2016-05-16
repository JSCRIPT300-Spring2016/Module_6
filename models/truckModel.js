var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var foodTruckSchema = new Schema({
  name: String,
  foodType: [String],
  schedule: [String],
  payment: [String],
  description: String,
  website: String,
  Facebook: String,
  Twitter: String
});

module.exports = mongoose.model('Truck', foodTruckSchema);