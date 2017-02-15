'use strict';
var shortid = require('shortid');
module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'outlet_images',
	connection : 'mnmnDB',
	autoPK : false,
	attributes : {
		images : {
			model : 'images',
			columnName : 'image_id',
			foreignKey : true,
		},
		outlets : {
			model : 'outlets',
			columnName : 'outlet_id',
			foreignKey : true,
		}
	}
};
