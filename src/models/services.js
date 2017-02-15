'use strict';
var shortid = require('shortid');

module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'services',
	connection : 'mnmnDB',
	autoPK : false,

	attributes : {
		services_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		services_name : {
			type : 'string',
		},
		creational_date : {
			type : 'datetime'
		},
		updational_date : {
			type : 'datetime'
		}
		
	}
};
