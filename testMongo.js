var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/exampleDb', function (error, db) {
  if (!error) {      
    console.log('We are connected');    
  }
});
