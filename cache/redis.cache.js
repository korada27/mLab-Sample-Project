/*
var redis = require('redis');
var logger = require('../util/logger.util');
var errorUtil = require('../util/errorMessages.util');

var config;
if(process.env.VCAP_SERVICES) {
  var vcapServices = JSON.parse(process.env.VCAP_SERVICES);
  var redisServie = vcapServices["p-redis"][0];
  config = redisServie.credentials;
} else {
  var localconfig = require('config.json')('./config/config.json');
  config = localconfig.redis;
}

var redisClient = redis.createClient({host: config.host, port: config.port, password: config.password});

redisClient.on('connect', function () {
  logger.info('Redis connection successful.');
});

redisClient.on('error', function (err) {
  logger.error(errorUtil.buildErrorMessageDev(err));
});


module.exports = redisClient;
*/
