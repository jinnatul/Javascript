/***  Array.prototype.includes()  ***/

[1, 2, 3].includes(2)      // true
[1, 2, 3].includes(4)      // false
[1, 2, 3].includes(3, 3)   // false
[1, 2, 3].includes(3, -1)  // true
[1, 2, NaN].includes(NaN)  // true

// fromIndex is greater than or equal to the array length

let arr = ['a', 'b', 'c']
arr.includes('c', 3)    // false
arr.includes('c', 100)  // false

// Computed index is less than 0

arr.includes('a', -100) // true
arr.includes('b', -100) // true
arr.includes('c', -100) // true
arr.includes('a', -2)   // false

// includes() used as a generic method

(function () {
  console.log(Array.prototype.includes.call(arguments, 'a'))  // true
  console.log(Array.prototype.includes.call(arguments, 'd'))  // false
})('a','b','c');



/***  Array.prototype.indexOf()  ***/

// Using indexOf()

const array = [2, 9, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0


// Finding all the occurrences of an element

let indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';
let idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices); // [0, 2, 4]



/***  Array.prototype.join()  ***/

const a = ['Wind', 'Water', 'Fire'];
a.join();      // 'Wind,Water,Fire'
a.join(', ');  // 'Wind, Water, Fire'
a.join(' + '); // 'Wind + Water + Fire'
a.join('');    // 'WindWaterFire'



/***  Array.prototype.keys()  ***/

const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
}
/*
  expected output: 0
  expected output: 1
  expected output: 2
*/


// Key iterator doesn't ignore holes

const arr = ['a', , 'c'];
const sparseKeys = Object.keys(arr);
console.log(sparseKeys); // ['0', '2']

const denseKeys = [...arr.keys()];
console.log(denseKeys);  // [0, 1, 2]



/***  Array.prototype.lastIndexOf()  ***/

// Using lastIndexOf

const numbers = [2, 5, 9, 2];
numbers.lastIndexOf(2);     // 3
numbers.lastIndexOf(7);     // -1
numbers.lastIndexOf(2, 3);  // 3
numbers.lastIndexOf(2, 2);  // 0
numbers.lastIndexOf(2, -2); // 0
numbers.lastIndexOf(2, -1); // 3

// Finding all the occurrences of an element

let indices = [];
const array = ['a', 'b', 'a', 'c', 'a', 'd'];
let element = 'a';
let idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}
console.log(indices); // [4, 2, 0]



/***  Array.prototype.map()  ***/

// Mapping an array of numbers to an array of square roots

let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})
/*
  roots is now     [1, 2, 3]
  numbers is still [1, 4, 9]
*/

// Using map to reformat objects in an array

let kvArray = [{key: 1, value: 10}, 
  {key: 2, value: 20}, 
  {key: 3, value: 30}]

let ReformattedArray = kvArray.map(obj => {
  let rObj = {}
  rObj[obj.key] = obj.value
  return rObj
})
/*
ReformattedArray is now [{1: 10}, {2: 20}, {3: 30}]
kvArray is still: 
  [{key: 1, value: 10}, 
  {key: 2, value: 20}, 
  {key: 3, value: 30}]
*/

// Mapping an array of numbers using a function containing an argument

let numbers = [1, 4, 9]
let doubles = numbers.map(function(num) {
  return num * 2
})
/*
  doubles is now   [2, 8, 18]
  numbers is still [1, 4, 9]
*/

// Using map generically

Array.prototype.map.call('Hello World', (x) => { 
  return x.charCodeAt(0)
})
// [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]



/***  Array.prototype.pop()  ***/

const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
const popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin' ] 
console.log(popped); // 'sturgeon'

const myFish = {0:'angel', 1:'clown', 2:'mandarin', 3:'sturgeon', length: 4};
const popped = Array.prototype.pop.call(myFish);
console.log(myFish); // {0:'angel', 1:'clown', 2:'mandarin', length: 3} 
console.log(popped); // 'sturgeon'
