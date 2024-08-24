export type Options = {
	/**
	The unicorn-ifying string.

	@default rainbows
	*/
	readonly postfix?: string;
};

/**
Unicorn-ifies a string.

@param input - A string that needs to be unicorn-ified.
@returns A unicorn-ified string.

@example
```
import unicornFun from 'unicorn-fun';

unicornFun('unicorns');
//=> 'unicorns & rainbows'
```
*/
export default function unicornFun(input: string, options?: Options): string;
