'use strict';

const
Config = require('./config');

// Glue manifest
const
manifest = module.exports = {

	server : {
		app : {
			config : Config
		}
	},

	connections : [ {
		host : Config.server.host,
		port : Config.server.port,
		labels : 'api'
	} ],

	registrations : [ {
		plugin : {
			register : 'dogwater',
			options : Config.dogwater
		}
	}, {
		plugin : {
			register : 'blipp'
		}
	}, {
		plugin : {
			register : 'good',
			options: Config.goodLogger
		}
	}, {
		plugin : {
			register : 'inert'
		}
	}, {
		plugin : {
			register : 'vision'
		}
	}, {
		plugin : {
			register : 'hapi-swaggered',
			options : Config.swagger.options
		}
	}, {
		plugin : {
			register : 'hapi-swaggered-ui',
			options : Config.swaggerui.options
		}
	}
	]

};