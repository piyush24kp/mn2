module.exports.getAllCity = function(request, reply) {
	var cities = request.server.collections().city;
	cities.find(
			function(err, cityData) {
				if (!err) {
					if (cityData != undefined) {
						return reply({
							statusCode : 200,
							message : 'succuss',
							data :cityData});
					} else {
						return reply({
							statusCode : 204,
							message : 'not found'
							});
					}
			
			}});
};

