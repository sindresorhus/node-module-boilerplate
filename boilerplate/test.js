import test from 'ava';
import moduleName from '.';

test('title', t => {
	t.throws(() => {
		moduleName(123);
	}, {
		instanceOf: TypeError,
		message: 'Expected a string, got number'
	});

	t.is(moduleName('unicorns'), 'unicorns & rainbows');
});
