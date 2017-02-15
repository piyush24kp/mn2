'use strict';
var shortid = require('shortid');

module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'time_slot',
	connection : 'mnmnDB',
	autoPK : false,

	attributes : {
		time_slot_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		slot_time : {
			type : 'string',
		},
		description : {
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
