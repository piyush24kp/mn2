'use strict';

const Path = require('path');
const Creds = require('./credentials');

module.exports = {

	
    server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3002,
        liveurl : 'http://202.89.106.133/api'
    },

    runconfig : {
    	apiurl : 'http://202.89.106.133/api',
    	portalurl : 'http://202.89.106.133/ux',
    	
    },
    
    redis : {
    	host: '202.89.106.133',
    	port : 8080
    },
    
    api: {},

    dogwater: {
    	connections : {
    		mnmnDB : {
    			adapter : 'mnmnConn',
    			host : 'localhost',
    			port : 3306,
    			user : Creds.mysqlCreds.user,
    			password : Creds.mysqlCreds.password,
    			database : 'mnmn',
    			connectionLimit : 30,
    			// Optional
    			charset : 'utf8',
    			// TODO Change
    			collation : 'utf8_swedish_ci'
    		}
    	},
    	adapters : {
    		mnmnConn : require('sails-mysql')
    	},
    	models: Path.normalize(`${__dirname}/../src/models`)
    },
    swagger : {
    	options: {
    	      info: {
    	        title: 'API Docs',
    	        description: 'Auto Generated API Documentation',
    	        termsOfService : 'proprietory',
    	        contact: {
    	        	name: 'valuelabs',
    	        	url: 'www.valuelabs.com',
    	        	email : 'info@valuelabs.com'
    	        },
    	        version: '1.0'
    	      },
      	    	supportedMethods : ['get', 'post'],
      	    	schemes : ['http', 'https'],
      	    	tagging : {
      	    		pathLevel : 3
      	    	},
      	    	 tags: {
      	           'api/v1/user': 'All Users data',
      	           'api/v1/services': 'Services Documentation',
      	           'v1/auth': 'Authentication Documentation',
      	           'api/v1/car': 'Car Data'
      	         },
    	    }
    },
    swaggerui : {
    	 options: {
    	      title: 'API Documentation',
    	      path: '/docs',
    	      basePath : '/api',
    	      authorization: {
    	        field: 'Authorization',
    	        scope: 'header', // header works as well
    	        // valuePrefix: 'bearer '// prefix incase
    	        defaultValue: 'test',
    	        placeholder: 'Enter your apiKey here'
    	      },
    	      swaggerOptions: {
    	        validatorUrl: null
    	      }
    	    }
    },
    goodLogger : {
        ops: {
            interval: 1000
        },
        reporters: {
        	fileOps: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{ ops: '*'}]
            }, {
                module: 'good-squeeze',
                name: 'SafeJson'
            }, {
                module: 'good-file',
                args: ['./logs/ops/ops-logs.log']
            }],
            fileLogs: [{
                 module: 'good-squeeze',
                 name: 'Squeeze',
                 args: [{ log: '*'}]
             }, {
                 module: 'good-squeeze',
                 name: 'SafeJson'
             },{
                 module: 'rotating-file-stream',
                 args: ['server-logs.log',
                 {
                     size: '10000B',
                     path: './logs/serverlogs/'
                 }]
             }],
             fileRequests: [{
                 module: 'good-squeeze',
                 name: 'Squeeze',
                 args: [{ response: '*'}]
             }, {
                 module: 'good-squeeze',
                 name: 'SafeJson'
             },{
                 module: 'rotating-file-stream',
                 args: ['response-logs.log',
                 {
                     size: '10000B',
                     path: './logs/responselogs/'
                 }]
             }]
        }
    },
    
    MixInsideFolder: './uploads/',
    ExcelUploadFolder : '../excelUploads/'

};
