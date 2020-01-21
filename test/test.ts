import test from 'ava';
import moduleName from '../source';

test('title', t => {
	t.throws(() => {
		(moduleName as any)(123);
	}, {
		message: 'Expected a string, got number'
	});

	t.is(moduleName('unicorns'), 'unicorns & rainbows');
});
