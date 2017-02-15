'use strict';
var shortid = require('shortid');

module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'city',
	connection : 'mnmnDB',
	autoPK : false,

	attributes : {
		city_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		name : {
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
