//var base64 = require('base-64');
//var CryptoJS = require("crypto-js");
//var crypto = require('crypto'), algorithm = 'aes-256-gcm', encryption_key = '3zTvzr3p67VC61jmV54rIYu1545x4TlY'
var base = 'base64';
var asci = 'ascii';

module.exports.encryptData = function encrypt(text) {
	var encrypted = null;
	if (text != null && text != "") {
		encrypted = new Buffer(text).toString(base);
	}

	return encrypted;
};

module.exports.decryptData = function decrypt(encrypted) {
	var decType = null;
	if (encrypted != null && encrypted != "") {
		decType = new Buffer(encrypted, base).toString(asci);
	}

	return decType;
};
