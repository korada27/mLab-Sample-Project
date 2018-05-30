const winston = require('winston');
winston.emitErrs = true;

var loggerLevel = process.env.LOGGER_LEVEL || "debug";

var logger = new( winston.Logger )( {
  transports: [
    new winston.transports.Console( {
      level: loggerLevel,
      colorize: true,
      json:false
    } )
  ],
  exceptionHandlers: [
    new winston.transports.Console( {
      level: 'error',
      colorize: true,
      json:false
    } )]
} );

module.exports = logger;

