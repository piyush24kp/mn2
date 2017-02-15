'use strict';
var shortid = require('shortid');

module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'role',
	connection : 'mnmnDB',
	autoPK : false,

	attributes : {
		role_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		name : {
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
