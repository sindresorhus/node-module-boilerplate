export type Options = {
	/**
	Lorem ipsum.

	@default rainbows
	*/
	readonly postfix?: string;
};

/**
My awesome module

@param input - Lorem ipsum.
@returns Lorem ipsum.

@example
```
import unicornFun from 'unicorn-fun';

unicornFun('unicorns');
//=> 'unicorns & rainbows'
```
*/
export default function unicornFun(input: string, options?: Options): string;
