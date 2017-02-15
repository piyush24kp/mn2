'use strict';
var shortid = require('shortid');

module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'images',
	connection : 'mnmnDB',
	autoPK : false,

	attributes : {
		image_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		url : {
			type : 'string',
		},
		is_primary : {
			type : 'boolean',
		},
		creational_date : {
			type : 'datetime'
		},
		updational_date : {
			type : 'datetime'
		}
		
	}
};
