import test from 'ava';
import moduleName from '../source';

test('title', t => {
	const err = t.throws(() => {
		moduleName(123);
	}, TypeError);
	t.is(err.message, 'Expected a string, got number');

	t.is(moduleName('unicorns'), 'unicorns & rainbows');
});
