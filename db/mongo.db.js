var logger = require('../util/logger.util');
var MongoClient = require('mongodb').MongoClient;
var mongoose=require('mongoose');
var cloud = true;
var mongodbHost = '127.0.0.1';
var mongodbPort = '27017';

if (cloud) {
 mongodbHost = 'admin:admin@ds121099.mlab.com';
 mongodbPort = '21099';
}
var mongodbDatabase = 'interfacedb';
var url = 'mongodb://'+mongodbHost+':'+mongodbPort + '/' + mongodbDatabase;

mongoose.connect(url);
var conn = mongoose.connection;
// conn.on('error', console.error.bind(console, 'connection error:')); 
conn.on('error', function() {
    // Wait for the database connection to establish, then start the app.                         
  logger.error('Failed to Connect mLab Database');
  
  });
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
logger.info('mLab connection established');

});




module.exports={

    conn:conn
}