US State Abbreviations
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> US state abbreviations.


## Installation

``` bash
$ npm install datasets-us-states-abbr
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var abbr = require( 'datasets-us-states-abbr' );
```

#### abbr

US state two-letter abbreviations listed in alphabetical order according to state name.

``` javascript
console.log( abbr );
/*
	[
		"AL",
		"AK",
		"AZ",
		"AR",
		"CA",
		"CO",
		"CT",
		"DE",
		"FL",
		"GA",
		"HI",
		...
	]
*/
```


## Examples

``` javascript
var abbr = require( 'datasets-us-states-abbr' );

var len = abbr.length,
	N = 10,
	idx,
	i;

// Select random state abbreviations from the list...
for ( i = 0; i < N; i++ ) {
	idx = Math.ceil( Math.random()*len ) - 1;
	console.log( abbr[ idx ] );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-us-states-abbr.svg
[npm-url]: https://npmjs.org/package/datasets-us-states-abbr

[travis-image]: http://img.shields.io/travis/datasets-io/us-states-abbr/master.svg
[travis-url]: https://travis-ci.org/datasets-io/us-states-abbr

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/us-states-abbr/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/us-states-abbr?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/us-states-abbr.svg
[dependencies-url]: https://david-dm.org/datasets-io/us-states-abbr

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/us-states-abbr.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/us-states-abbr

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/us-states-abbr.svg
[github-issues-url]: https://github.com/datasets-io/us-states-abbr/issues
