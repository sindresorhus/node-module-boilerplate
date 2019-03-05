import test from 'ava';
import moduleName from '../source';

test('title', t => {
	t.throws(() => {
		moduleName(123);
	}, 'Expected a string, got number');

	t.is(moduleName('unicorns'), 'unicorns & rainbows');
});
