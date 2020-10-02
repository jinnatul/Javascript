/***  Array.from()  ***/

// Array from a String
Array.from('foo');  // [ "f", "o", "o" ]


// Array from a Set
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set); // [ "foo", "bar", "baz" ]


// Array from a Map
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map); // [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values()); // ['a', 'b'];
Array.from(mapper.keys()); // ['1', '2'];


// Array from an Array-like object (arguments)

function f() {
  return Array.from(aa);
}
f(1, 2, 3); // [ 1, 2, 3 ]


// Using arrow functions and Array.from()

Array.from([1, 2, 3], x => x + x); // [2, 4, 6]

/*
Generate a sequence of numbers Since the array is initialized with `undefined` on each position,
the value of `v` below will be `undefined` */

Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]


// Sequence generator (range)

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
range(0, 4, 1); // [0, 1, 2, 3, 4] 
range(1, 10, 2); // [1, 3, 5, 7, 9]
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]



/***  Array.isArray()  ***/

// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array(1, 2, 3, 4, 5));
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype); 

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });



/***  Array.of()  ***/

Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]

Array(7);          // array of 7 empty slots
Array(1, 2, 3);    // [1, 2, 3]

