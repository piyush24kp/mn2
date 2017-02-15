module.exports.getAllOutletsByCityAndAddress = function(request, reply) {
	var outlets = request.server.collections().outlets;
	outlets.find({city_id : request.query.cityId,outlet_type: request.query.type, or : [{ like:  { main_lanmark:'%'+request.query.place+'%'} },{ like:{ address_line_first: '%'+request.query.place+'%'} }]}).populate("outletImages").exec(
			function(err, outletsData) {
				if (!err) {
					if (outletsData != undefined && outletsData.length != 0) {
						return reply({
							statusCode : 200,
							message : 'succuss',
							data :outletsData});
					} else {
						return reply({
							statusCode : 204,
							message : 'not found'
							});
					}
			
			}});
};

