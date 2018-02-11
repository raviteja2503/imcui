import config from './config';
var validator = require('validator');
var crypto = require('crypto'),
	algorithm = 'aes-256-ctr',
	password = crypto.createHash('md5').update(config.secret + '').digest("hex");

module.exports.utils = {
	isEmail: function (value) {
		return validator.isEmail(value);
	},
	encryptText: function (text) {
		return crypto.createHash('md5').update(text + '').digest("hex");
	},
	encryptObj: function (text) {
		var cipher = crypto.createCipher(algorithm, password);
		var crypted = cipher.update(text + '', 'utf8', 'hex');
		crypted += cipher.final('hex');
		return crypted;
	},
	decryptObj: function (text) {
		var decipher = crypto.createDecipher(algorithm, password);
		var dec = decipher.update(text + '', 'hex', 'utf8');
		dec += decipher.final('utf8');
		return dec;
	},
	formatText: function (text) {
		var result = text;
		for (var i = 1; i < arguments.length; i += 1) {
			var re = new RegExp('\\{' + (i - 1) + '\\}', 'g');
			result = result.replace(re, arguments[i]);
		}
		return result;
	},
	getFullName: function (object) {
		var fullName = 'NA';
		try {
			fullName = object.getLastName() + ' ' + object.getFirstName();
		} catch (e) {
			try {
				fullName = object.lastName + ' ' + object.firstName;
			} catch (e) { }
		}
		return fullName;
	},
	getSystemTime: function () {
		return new Date().getTime();
	},
	getRandomNumber: function () {
		//generates 8 digit random integer as string
		return Math.floor((Math.random() * 100000000) + 9999999).toString();
	},
	isNumber: function (n) {
		return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
	},
	formatStorage: function (key, value) {
		var finalKey = this.encryptObj(key);
		var finalvalue = this.encryptObj(value);
		localStorage.setItem(finalKey, finalvalue);
	},
	getStorage: function (key) {
		// console.log("key" + " " + key);
		var finalKey = this.encryptObj(key);
		// console.log("finalKey" + " " + finalKey);
		// console.log(localStorage.getItem(finalKey));
		var value = localStorage.getItem(finalKey);
		if(value) {			
			// console.log("Available");
			var finalValue = this.decryptObj(value);
			return finalValue;
		} else {
			// console.log("Not Available Cleared");
			return false;			
		}
						
	}
};
