/***  Array.prototype.push()  ***/

// Adding elements to an array

let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4


// Merging two arrays

let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

Array.prototype.push.apply(vegetables, moreVegs)
console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']



/***  Array.prototype.reduce()  ***/

// Sum all the values of an array

let total = [ 0, 1, 2, 3 ].reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,
  0
); // 6

// Sum of values in an object array

let initialValue = 0;
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x
}, initialValue)

console.log(sum) // 6

// Flatten an array of arrays

let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( accumulator, currentValue ) => accumulator.concat(currentValue),
  []
)

// Counting instances of values in an object

let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce((allNames, name) => { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
  return allNames
}, {}) // { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


// Grouping objects by a property

let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    let key = obj[property]
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
}

let groupedPeople = groupBy(people, 'age')
/*
  { 
    20: [
      { name: 'Max', age: 20 }, 
      { name: 'Jane', age: 20 }
    ], 
    21: [{ name: 'Alice', age: 21 }] 
  }
*/

// Bonding arrays contained in an array of objects using the spread operator and initialValue

let friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

let allbooks = friends.reduce(function(accumulator, currentValue) {
  return [...accumulator, ...currentValue.books]
}, ['Alphabet'])
/*
  allbooks = [
    'Alphabet', 'Bible', 'Harry Potter', 'War and peace', 
    'Romeo and Juliet', 'The Lord of the Rings',
    'The Shining'
  ]
*/

// Remove duplicate items in an array
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray) // ["a", "b", "c", "e", "d"]



/***  Array.prototype.reduceRight()  ***/

// Sum up all values within an array

const sum = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
}); // 6

// Flatten an array of arrays

const flattened = [[0, 1], [2, 3], [4, 5]].reduceRight(function(a, b) {
  return a.concat(b);
}, []); // [4, 5, 2, 3, 0, 1]


// Difference between reduce and reduceRight

const a = ['1', '2', '3', '4', '5']; 
const left  = a.reduce(function(prev, cur)      { return prev + cur; }); 
const right = a.reduceRight(function(prev, cur) { return prev + cur; }); 
console.log(left);  // "12345"
console.log(right); // "54321"



/***  Array.prototype.reverse()  ***/

// Reversing the elements in an array

const a = [1, 2, 3];
console.log(a); // [1, 2, 3]

a.reverse(); 
console.log(a); // [3, 2, 1]

// Reversing the elements in an array-like object

const a = {0: 1, 1: 2, 2: 3, length: 3};
console.log(a); // {0: 1, 1: 2, 2: 3, length: 3}

Array.prototype.reverse.call(a); 
console.log(a); // {0: 3, 1: 2, 2: 1, length: 3}



/***  Array.prototype.shift()  ***/

// Removing an element from an array

let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
console.log('myFish before:', JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

let shifted = myFish.shift(); 
console.log('myFish after:', myFish); // myFish after: ['clown', 'mandarin', 'surgeon']
console.log('Removed this element:', shifted); // Removed this element: angel


// Using shift() method in while loop

let names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John



/***  Array.prototype.slice()  ***/

// Return a portion of an existing array

let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
let citrus = fruits.slice(1, 3) // ['Orange','Lemon']

// Array-like objects

function list() {
  return Array.prototype.slice.call(arguments)
}
let list1 = list(1, 2, 3) // [1, 2, 3]



/***  Array.prototype.some()  ***/

// Testing value of array elements

const isBiggerThan10 = (element) => {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

// Testing array elements using arrow functions

[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true


// Checking whether a value exists in an array

const fruits = ['apple', 'banana', 'mango', 'guava'];

const checkAvailability = (arr, val) => {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true

// Checking whether a value exists using an arrow function

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true

// Converting any value to Boolean

const TRUTHY_VALUES = [true, 'true', 1];

const getBoolean = (value) => {   
  if (typeof value === 'string') { 
    value = value.toLowerCase().trim();
  }
  return TRUTHY_VALUES.some((t) => {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true