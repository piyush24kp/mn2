'use strict';
var shortid = require('shortid');

module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'outlet_transaction',
	connection : 'mnmnDB',
	autoPK : false,

	attributes : {
		transacton_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		services_name : {
			type : 'string',
		},
		
		start_time : {
			type : 'string',
		},
		end_time : {
			type : 'string',
		},
		outlet_id : {
			type : 'integer',
			foreignKey : true
		},
		user_id : {
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
