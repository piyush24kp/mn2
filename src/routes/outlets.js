const outlets = require('../handlers/outlets');
module.exports = [ {
	path : '/mnmn/outlets',
	method : 'GET',
	handler : outlets.getAllOutletsByCityAndAddress,
	config : {
		 cors : true,
		tags: ['api'],
		description: 'Going to fetch outlets',
		 notes: 'This API is used to fetch outlets'		
	}

}];
