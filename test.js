'use strict';
var test = require('ava');
var imageExtensions = require('./');

test(function (t) {
	t.assert(Array.isArray(imageExtensions));
	t.assert(imageExtensions.length > 0);
});
