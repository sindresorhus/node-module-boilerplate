'use strict';

module.exports = (input, options = {}) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return input + ' & ' + (options.postfix || 'rainbows');
};
