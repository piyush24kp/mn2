'use strict';
var shortid = require('shortid');
module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'customer_comment',
	connection : 'mnmnDB',
	autoPK : false,
	attributes : {
		comment_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		message : {
			type : 'string',
		},
		category : {
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
