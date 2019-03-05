export default function (input: string): string {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return input + ' & rainbows';
}
