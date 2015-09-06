'use strict';
var test = require('ava');
var imageExtensions = require('./');

test(function (t) {
	t.true(Array.isArray(imageExtensions));
	t.true(imageExtensions.length > 0);

	t.end();
});
