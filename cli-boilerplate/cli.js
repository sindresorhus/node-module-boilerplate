#!/usr/bin/env node
'use strict';
var meow = require('meow');
var <%= camelModuleName %> = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ <%= moduleName %> [input]',
		'',
		'Examples',
		'  $ <%= moduleName %>',
		'  unicorns & rainbows',
		'',
		'  $ <%= moduleName %> ponies',
		'  ponies & rainbows',
		'',
		'Options',
		'  --foo  Lorem ipsum. Default: false'
	].join('\n')
});

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'));
