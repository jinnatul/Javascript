/***  Common operations  ***/

// Create an Array

let fruits = ['Apple', 'Banana'];
console.log(fruits.length); // 2


// Access an Array item using the index position

let first = fruits[0]; // Apple
let last = fruits[fruits.length - 1]; // Banana


// Loop over an Array

fruits.forEach((item, index) => {
  console.log(item, index);
});
// Apple 0
// Banana 1


// Add an item to the end of an Array

let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]


// Remove an item from the end of an Array

let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]


// Remove an item from the beginning of an Array

let first = fruits.shift() // remove Apple from the front
// ["Banana"]


// Add an item to the beginning of an Array

let newLength = fruits.unshift('Strawberry') // add to the front
// ["Strawberry", "Banana"]


// Find the index of an item in the Array

fruits.push('Mango')
// ["Strawberry", "Banana", "Mango"]

let pos = fruits.indexOf('Banana') // 1


// Remove an item by index position

let removedItem = fruits.splice(pos, 1) // this is how to remove an item
// ["Strawberry", "Mango"]


// Remove items from an index position

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot']
console.log(vegetables) // ["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1, numbers = 2;
let removedItems = vegetables.splice(pos, numbers)
// this is how to remove items, numbers defines the number of items to be removed,
// starting at the index position specified by pos and progressing toward the end of array.

console.log(vegetables) // ["Cabbage", "Carrot"] (the original array is changed)
console.log(removedItems) // ["Turnip", "Radish"]


// Copy an Array

let shallowCopy = fruits.slice() // ["Strawberry", "Mango"]



/***  Accessing array elements  ***/

let arr = ['this is the first element', 'this is the second element', 'this is the last element']
console.log(arr[0])              // logs 'this is the first element'
console.log(arr[1])              // logs 'this is the second element'
console.log(arr[arr.length - 1]) // logs 'this is the last element'

let years = [1950, 1960, 1970, 1980, 1990, 2000, 2010]
console.log(years.0)   // a syntax error
console.log(years[0])  // works properly

console.log(years['2']) // 1970
console.log(years['02']) // undefined
console.log(years['2'] != years['02']) // true



/***  Relationship between length and numerical properties  ***/

const fruits = []
fruits.push('banana', 'apple', 'peach')
console.log(fruits.length) // 3

fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6


// Increasing the length.

fruits.length = 10
console.log(fruits)              // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)) // ['0', '1', '2', '5']
console.log(fruits.length)       // 10
console.log(fruits[8])           // undefined


// Decreasing the length property does, however, delete elements.

fruits.length = 2
console.log(Object.keys(fruits)) // ['0', '1']
console.log(fruits.length)       // 2


/***  Creating an array using the result of a match  ***/

const myRe = /d(b+)(d)/i
const myArray = myRe.exec('cdbBdbsbz'); // ["dbBd", "bB", "d"]
