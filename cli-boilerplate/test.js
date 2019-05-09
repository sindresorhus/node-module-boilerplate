import test from 'ava';
import execa from 'execa';

test('title', async t => {
	const {stdout} = await execa('./cli.js', ['ponies']);
	t.is(stdout, 'ponies & rainbows');
});
