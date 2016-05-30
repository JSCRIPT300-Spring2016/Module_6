// Below you'll find the schema you need to export your truckModel.
// When exporting the mongoose model you will create using this schema,
// name your model 'Truck' (see the example in the slide deck for 'Book')
// this is to match the name of the collection the data was imported into

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
