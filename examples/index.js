'use strict';

var abbr = require( './../lib' );

var len = abbr.length,
	N = 10,
	idx,
	i;

// Select random state abbreviations from the list...
for ( i = 0; i < N; i++ ) {
	idx = Math.ceil( Math.random()*len ) - 1;
	console.log( abbr[ idx ] );
}
