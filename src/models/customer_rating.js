'use strict';
var shortid = require('shortid');
module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'customer_rating',
	connection : 'mnmnDB',
	autoPK : false,
	attributes : {
		rating_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		rating_marks : {
			type : 'integer',
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
