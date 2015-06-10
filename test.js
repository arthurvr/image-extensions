'use strict';
var assert = require('assert');
var imageExtensions = require('./');

it('contains image extensions', function () {
	assert(Array.isArray(imageExtensions));
	assert(imageExtensions.length > 0);
});
