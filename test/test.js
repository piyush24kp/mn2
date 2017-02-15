var Code = require('code'); // assertion library
var Lab = require('lab');
var lab = exports.lab = Lab.script();
const
Config = require('../src/config');

var server = require("../src/index").server; // require ../index.js

lab.experiment("Auth Test", function() {

	var authToken;

	lab.before((done) => {

	    server.on('start', done);

	        });

	
	// tests
	lab.test("entry point auth", (done) => {
		var options = {
			method : "POST",
			url : "/v1/auth",
			payload : {
			    "consumerSecret" : "548$hlnC%2Hns$fyi14k8NqdFuKji7s%tq2p",
			    "tenantId" : "BANIsssDDK",
			    "consumerKey" : "wAfPMdCrTiIyeQMA"
			    }
		};
		// server.inject lets you similate an http request
		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			console.log(response.result.data.authToken);
			authToken = response.result.data.authToken;
			// Code.expect(response.result).to.have.length(10);
			done();
		});
	});
	
	lab.test("get customer information", (done) => {
		console.log(authToken);
		var options = {
			method : "GET",
			url : "/v1/test1",
			headers: {
		            'Authorization': authToken
		        }
		};
		// server.inject lets you similate an http request
		server.inject(options, function(response) {
			Code.expect(response.statusCode).to.equal(200);
			done();
		});
	});
});