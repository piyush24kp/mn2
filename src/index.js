'use strict'
const Hapi = require('hapi');
const mysql = require('sails-mysql');
const Glue = require('glue');
const Manifest = require('./manifest');
const Path = require('path');

Glue.compose(Manifest, { relativeTo: __dirname }, (err, server) => {

	var info = function(message){
		server.log(['info'], message);
	}
	var error = function(message){
		server.log(['error'], message);
	}
	var debug = function(message){
		server.log(['debug'], message);
	}
	var warn = function(message){
		server.log(['warn'], message);
	}
	
	//Registering Methods
	server.method('log.info', info, {});
	server.method('log.error', error, {});
	server.method('log.debug', debug, {});
	server.method('log.warn', warn, {});
	
    server.initialize((err) => {
    	if(err){
        	console.log("error : " + err);
        	server.methods.log.error(err); 
        	server.methods.log.info("Server didnt started");
            console.log("Server didnt started");
    	}else{
    	var routes = require('./routes');
    	server.route(routes.routes);
    	server.route({
    	    method: 'GET',
    	    path: '/images/{param*}',
    	    handler: {
    	        directory: {
    	            path: 'uploads',
    	            listing: true
    	        }
    	    }
    	});
        server.start((err) => {
        	if(err){
            	console.log(err);
            	server.methods.log.error(err); 
            	server.methods.log.info("Server didnt started");
                console.log("Server didnt started");
        	}else{

        		server.methods.log.info("Server started successfully at " + new Date().getTime());
                console.log(`Server started at ${server.info.uri}`);
        	}
        });
        
          
        
    	}
    });
    
    exports.server = server;
});