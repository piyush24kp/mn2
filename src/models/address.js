'use strict';
var shortid = require('shortid');

module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'address',
	connection : 'mnmnDB',
	autoPK : false,

	attributes : {
		address_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		address_line_first : {
			type : 'string',
		},
		
		address_line_second : {
			type : 'string',
		},
		main_landmark : {
			type : 'string',
		},
		
		city_id : {
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
