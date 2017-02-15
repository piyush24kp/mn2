var multiparty = require('multiparty'), fs = require('fs'), url = require('url'), Config = require('../config');

module.exports.uploadGallery = function(request, reply) {
	console.log("started", request.request);
	var params = url.parse(request.url, true).query;
	console.log(params.id);
if(params.id == undefined){
	var finaljson = {
			"statusCode" : 401,
			"message" : "outlet Id not found",
		};
		
	return reply(finaljson);
}
	var form = new multiparty.Form();
	form.parse(request.payload, function(err, fields, files) {
		if (err){
		console.log(err);
			return reply(err);
		}
		else {
			upload(files, request, function(err,fields, response) {
				if (!err) {
					

					return reply(err, response);
				} else {
					console.log("in else");
					return reply(err, response);
				}
			});
		}
		;
	});
};

const
uuid = require('node-uuid');
function saveDecision(request, vehicle_id, media_type, url, cb) {
	// Save the loan application decision
	console.log("in savedecision");
	var vehicleMediaModel = request.server.collections().vehicle_media;
	vehicleMediaModel.create({
		vehicle_id : vehicle_id,
		media_type : media_type,
		url : url,

	}, function(err) {
		if (!err)
			cb(null, "data saved");
		else {
			request.server.log([ 'info' ], "Error on image save " + err);
			cb(err, "error occrued");
		}
	});
}

/*
 * upload file function
 */
var url = require('url');
const Constants = require('../constants');

//var templateDir = path.resolve(__dirname,Config.MixInsideFolder);
var upload = function(files, request, cb) {
	var finaldata = new Array();
	var errordata = new Array();
	var one = url.parse(request.url, true).query;
	console.log("file length------- " +files.file.length);
	
	fs.readFile(files.file[0].path, function(err, data) {
		
		console.log("uploading folder " + Config.MixInsideFolder);
		checkFileExist();
		
		console.log(files.file[0].originalFilename);
		
		fs.writeFile(Config.MixInsideFolder+one.id + "_" + files.file[0].originalFilename, data, function(err) {
			
			console.log("to upload.......");
			var finaljson = {
				"statusCode" : 200,
				"message" : "Image uploaded successfuly to "+ Constants.images.path,
				"url" : Constants.images.path + one.id + "_" + files.file[0].originalFilename
			};
			finaldata.push(finaljson);
			if (err) {
				var finaljson = {
					"statusCode" : 401,
					"message" : "Error uploading image to "+ Constants.images.path,
				};
				errordata.push(finaljson);
				cb(err, errordata);
			} else
				cb(null,Constants.images.path + one.id + "_" + files.file[0].originalFilename, finaldata);

		});

	
	});
};

var checkFileExist = function() {
	fs.exists(Config.MixInsideFolder, function(exists) {
		if (exists === false)
			fs.mkdirSync(Config.MixInsideFolder);

	});
	console.log("folder created");
};
