'use strict';
var assert = require('assert');
var <%= camelModuleName %> = require('./');

it('should ', function () {
	assert.strictEqual(<%= camelModuleName %>('unicorns'), 'unicorns & rainbows');
});
