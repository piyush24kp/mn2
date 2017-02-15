'use strict';
var shortid = require('shortid');
module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'user_address',
	connection : 'mnmnDB',
	autoPK : false,
	attributes : {
		user : {
			model : 'user',
			columnName : 'user_id',
			foreignKey : true,
		},
		address : {
			model : 'address',
			columnName : 'address_id',
			foreignKey : true,
		}
	}
};
