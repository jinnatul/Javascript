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



/***  Array.prototype.concat()  ***/

// Concatenating two arrays

const letters = ['a', 'b', 'c'];
const numbers = [1, 2, 3];
letters.concat(numbers); // ['a', 'b', 'c', 1, 2, 3]


// Concatenating three arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];
const numbers = num1.concat(num2, num3);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Concatenating values to an array

const letters = ['a', 'b', 'c'];
const alphaNumeric = letters.concat(1, [2, 3]);
console.log(alphaNumeric); // ['a', 'b', 'c', 1, 2, 3]


// Concatenating nested arrays

const num1 = [[1]];
const num2 = [2, [3]];
const numbers = num1.concat(num2);
console.log(numbers); // [[1], 2, [3]]

// modify the first element of num1
num1[0].push(4);
console.log(numbers); // [[1, 4], 2, [3]]



/***  Array.prototype.copyWithin()  ***/

[1, 2, 3, 4, 5].copyWithin(-2) // [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWithin(0, 3) // [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4) // [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1) // [1, 2, 3, 3, 4]
[1, 2, 3, 4, 5].copyWithin(2, 4) // [1, 2, 5, 4, 5]
[1, 2, 3, 4, 5].copyWithin(2, 3) // [1, 2, 4, 5, 5]
[1, 2, 3, 4, 5].copyWithin(2, 4) // [1, 2, 5, 4, 5]



/***  Array.prototype.entries()  ***/

// Iterating with index and element

const a = ['a', 'b', 'c'];

for (const [index, element] of a.entries())
  console.log(index, element);
/*
  0 'a' 
  1 'b' 
  2 'c'
*/


// Using a for…of loop

const a = ['a', 'b', 'c'];
const iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
/*
  [0, 'a']
  [1, 'b']
  [2, 'c'] 
*/



/***  Array.prototype.every()  ***/

// Testing size of all array elements

const isBigEnough = (element) => {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true


// Using arrow functions

[12, 5, 8, 130, 44].every(x => x >= 10);   // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true


// Modifying items

let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr[index+1] -= 1
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 2 
})
/*
  1st iteration: [1,1,3,4][0] -> 1
  2nd iteration: [1,1,2,4][1] -> 1
  3rd iteration: [1,1,2,3][2] -> 2
*/


// Appending items

let arr = [1, 2, 3];
arr.every( (elem, index, arr) => {
  arr.push('new')
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
})
/*
  1st iteration: [1, 2, 3, new][0] -> 1
  2nd iteration: [1, 2, 3, new, new][1] -> 2
  3rd iteration: [1, 2, 3, new, new, new][2] -> 3
*/


// Deleting items

let arr = [1, 2, 3, 4];
arr.every( (elem, index, arr) => {
  arr.pop()
  console.log(`[${arr}][${index}] -> ${elem}`)
  return elem < 4
});
/*
  1st iteration: [1,2,3][0] -> 1
  2nd iteration: [1,2][1] -> 2
*/
