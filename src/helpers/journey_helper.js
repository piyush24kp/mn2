/* Updating user event status in Journey table */
module.exports.updateJourney = function(request, servicename) {
	var journeyModel = request.server.collections().journey;
	request.server.log([ 'info' ], "Entering  getAccountServices (user_id)"
		+ request.app.context.user_id);
	var userid = request.app.context.user_id;
	
	var querystr = 'update journey set status = 1 where user_id=? and service_id=?';
	if (userid != null && userid != "") {
		journeyModel.query(querystr, [ userid, servicename ], function(err,
				result) {
			if (!err) {
				request.server.log([ 'info' ],
						"Successfull updated journey table  ");
			} else {
				request.server.log([ 'error' ],
						"Error while updating journey table ", err);
			}

		});
	} else {
		request.server.log([ 'error' ],
				"Unable to get userid from authorization token ");
	}

};
