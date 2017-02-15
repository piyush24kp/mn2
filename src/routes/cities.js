const cities = require('../handlers/city');
module.exports = [ {
	path : '/mnmn/cities',
	method : 'GET',
	handler : cities.getAllCity,
	config : {
		 cors : true,
		tags: ['api'],
		description: 'Going to fetch all city',
		 notes: 'This API is used to fetch all city list'		
	}

}];
