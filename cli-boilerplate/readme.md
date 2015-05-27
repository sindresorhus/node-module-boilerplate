# <%= moduleName %> [![Build Status](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>.svg?branch=master)](https://travis-ci.org/<%= githubUsername %>/<%= moduleName %>)

>


## Install

```
$ npm install --save <%= moduleName %>
```


## Usage

```js
var <%= camelModuleName %> = require('<%= moduleName %>');

<%= camelModuleName %>('unicorns');
//=> unicorns & rainbows
```


## CLI

```
$ npm install --global <%= moduleName %>
```
```
$ <%= moduleName %> --help

Usage
<%= moduleName %> [input]

Example
<%= moduleName %>
unicorns & rainbows

<%= moduleName %> ponies
ponies & rainbows

Options
--foo  Lorem ipsum. Default: false
```


## API

### <%= camelModuleName %>(input, [options])

#### input

*Required*  
Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [<%= name %>](https://github.com/<%= githubUsername %>)
