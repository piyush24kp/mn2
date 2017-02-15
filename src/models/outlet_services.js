'use strict';
var shortid = require('shortid');
module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'outlet_services',
	connection : 'mnmnDB',
	autoPK : false,
	attributes : {
		outlet_services_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		services_name : {
			type : 'string',
		},
		time_for_service : {
			type : 'integer',
		},
		price : {
			type : 'integer',
		},
		outlet_id : {
			type : 'integer',
			foreignKey : true
		},
		creational_date : {
			type : 'datetime'
		},
		updational_date : {
			type : 'datetime'
		}
	}
};
