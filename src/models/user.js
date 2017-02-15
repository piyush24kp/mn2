'use strict';
var shortid = require('shortid');

module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'user',
	connection : 'mnmnDB',
	autoPK : false,

	attributes : {
		user_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		username : {
			type : 'string',
		},
		
		credential : {
			type : 'string',
		},
		first_name : {
			type : 'string',
		},
		
		last_name : {
			type : 'string',
		},
		gender : {
			type : 'string',
		},
		
		mobile_number : {
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
