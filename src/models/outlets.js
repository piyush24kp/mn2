'use strict';
var shortid = require('shortid');

module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'outlets',
	connection : 'mnmnDB',
	autoPK : false,

	attributes : {
		outlet_id : {
			type : 'integer',
			primaryKey : true,
			autoIncrement: true,
		},
		name : {
			type : 'string',
		},
		
		main_lanmark : {
			type : 'string',
		},
		outlet_type : {
			type : 'string',
		},
		
		address_line_first : {
			type : 'string',
		},
		start_time : {
			type : 'string',
		},
		
		end_time : {
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
		},
		outletImages : {
			collection : 'images',
			through : 'outlet_images'
		},
		
	}
};
