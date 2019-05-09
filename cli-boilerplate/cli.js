#!/usr/bin/env node
'use strict';
const meow = require('meow');
const <%= camelModuleName %> = require('<%= moduleName %>');

const cli = meow(`
	Usage
	  $ <%= moduleName %> [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ <%= moduleName %>
	  unicorns & rainbows
	  $ <%= moduleName %> ponies
	  ponies & rainbows
`);

console.log(<%= camelModuleName %>(cli.input[0] || 'unicorns'));
