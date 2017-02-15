'use strict';
var shortid = require('shortid');
module.exports = {
	migrate : 'safe',
	autoCreatedAt : false,
	autoUpdatedAt : false,
	identity : 'user_role',
	connection : 'mnmnDB',
	autoPK : false,
	attributes : {
		user : {
			model : 'user',
			columnName : 'user_id',
			foreignKey : true,
		},
		role : {
			model : 'role',
			columnName : 'role_id',
			foreignKey : true,
		}
	}
};
