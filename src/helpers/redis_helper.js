const Config = require('../config');
const Boom = require('boom');
const redis = require('redis');
const Promise = require('bluebird');

const ERR_REDIS_INTERNAL_ERROR = 1990;
const ERR_REDIS_KEY_NOT_SET = 1991;
const ERR_REDIS_KEY_NOT_FOUND = 1992;
const ERR_REDIS_CONN_REFUSED = 1993;
const ERR_REDIS_RETRY_TIME_OUT = 1993;

module.exports.setKey = function(key, value, ttl) {
	const 	options = {
		host : Config.redis.host,
		port : Config.redis.port,
		// password : Config.redis.password,
	};

	var redisclient = redis.createClient(options);
	redisclient.on('connect', log('connect'));
	redisclient.on('ready', log('ready'));
	redisclient.on('reconnecting', log('reconnecting'));
	redisclient.on('end', log('end'));
	function log(type) {
		return function() {
			console.log([ 'info' ], " Redis connected for Type:: " + type + "::"+ redisclient.connected);
		};
	}
	return new Promise(function(resolve, reject) {
		redisclient.on('error', function(err) {
			console.log([ 'error' ]," Redis connected :: "+ err);
			redisclient.quit();
			return reject(ERR_REDIS_CONN_REFUSED);
		});

		redisclient.on('ready', function putKey(type) {
			// console.log([ 'info' ]," Redis connected :: "+
			// redisclient.connected);
			// Set a value with an expiration
			console.log(key);
			console.log(JSON.stringify(value));
			redisclient.setex(key, ttl, JSON.stringify(value), function(err,
					status) {
				if (err) {
					console.log([ 'error' ],
							+"ERROR :Unable to Put in Redis DB  Failed" + err);
					redisclient.quit();
					// console.log([ 'info' ]," Redis connected :: "+
					// redisclient.connected);
					return reject(ERR_REDIS_KEY_NOT_SET);
				} else {
					// Expire in ttl seconds
					// console.log([ 'info' ],"Redis Helper Set Value ::
					// "+value);
					console.log([ 'info' ], "Redis Value Set Succesfully with :::::"
							+ key);
					console.log([ 'info' ], "Redis Value Set Succesfully with value:::::"
							+ value);
					redisclient.expire(key, ttl);
					redisclient.quit();
					console.log([ 'info' ], " Redis connected :: "
							+ redisclient.connected);
					return resolve(true);
				}
			});
		});
	});
};


module.exports.getValue = function(key) {	
	const options = {
		host : Config.redis.host,
		port : Config.redis.port,
		//password : Config.redis.password,
	};

	var redisclient = redis.createClient(options);
	redisclient.on('connect', log('connect'));
	redisclient.on('ready', log('ready'));
	redisclient.on('reconnecting', log('reconnecting'));
	redisclient.on('end', log('end'));
	redisclient.on('error', log('end'));
	
	function log(type) {
		return function() {
			console.log([ 'info' ], " Redis connected for Type:: " + type + ":: " + redisclient.connected);
		};
	}
	return new Promise(function(resolve, reject) {
		redisclient.on('error', function(err) {
			console.log('error ...Called..................'+ err);
			redisclient.quit();
			return reject(ERR_REDIS_CONN_REFUSED);
		});

		redisclient.on('ready', function putKey(type) {
			// Get a value with an Key
			redisclient.get(key, function(err, result) {
				if (err) {
					console.log([ 'ERROR' ],"Redis Get Failed For the Key Passed :" + key);
					redisclient.quit();
					return reject(ERR_REDIS_KEY_NOT_SET);
				} else {
					if (result == null) {
						redisclient.quit();
						console.log([ 'ERROR' ], "Redis Get Not Found for Key ,Result is :"	+ result);
						reject(ERR_REDIS_KEY_NOT_FOUND);
					} else {
						console.log([ 'INFO' ],	"Redis Found for Key ,Result is :" + result);
						redisclient.quit();
						resolve(JSON.parse(result));
					};
				}
			});
		});
	});
};


module.exports.deleteKey = function(key) {	
	const options = {
			host : Config.redis.host,
			port : Config.redis.port,
			//password : Config.redis.password,
		};
		var redisclient = redis.createClient(options);
		redisclient.on('connect', log('connect'));
		redisclient.on('ready', log('ready'));
		redisclient.on('reconnecting', log('reconnecting'));
		redisclient.on('end', log('end'));
		redisclient.on('error', log('end'));
		
		function log(type) {
			return function() {
				console.log([ 'info' ], " Redis connected for Type:: " + type + ":: " + redisclient.connected);
			};
		}
		return new Promise(function(resolve, reject) {
			redisclient.on('ready', function putKey(type) {
				// Get a value with an Key
				redisclient.del(key, function(err, result) {
					console.log(result);
				});
			});
		});
}
