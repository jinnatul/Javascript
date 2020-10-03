/***  Array.prototype.fill()  ***/

[1, 2, 3].fill(4)                // [4, 4, 4]
[1, 2, 3].fill(4, 1)             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1)          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3)          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2)        // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN)      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5)          // [1, 2, 3]
Array(3).fill(4)                 // [4, 4, 4]

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}) // [{}, {}, {}]
arr[0].hi = "hi" 
// [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]



/***  Array.prototype.filter()  ***/

// Filtering out all small values

function isBigEnough(value) {
  return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough) // [12, 130, 44]
// OR
let filtered = [12, 5, 8, 130, 44].filter(x => x >= 10); // [12, 130, 44]


// Find all prime numbers in an array

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

const isPrime = (num) => {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]


// Filtering invalid entries from JSON

let arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
]

const filterByID = (item) => {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true
  } 
  return false;
}
console.log('Filtered Array\n', arr.filter(filterByID))
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]


// Searching in array

const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}

console.log(filterItems(fruits, 'ap'))  // ['apple', 'grapes']
console.log(filterItems(fruits, 'an'))  // ['banana', 'mango', 'orange']


// Affecting Initial Array (modifying, appending and deleting)

// Modifying each words

let words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
const modifiedWords = words.filter((word, index, arr) => {
  arr[index+1] +=' extra'
  return word.length < 6
});
console.log(modifiedWords); // ["spray"]


// Appending new words

words = ['spray', 'limit', 'exuberant', 'destruction','elite', 'present']
const appendedWords = words.filter( (word, index, arr) => {
  arr.push('new')
  return word.length < 6
})
console.log(appendedWords) // ["spray" ,"limit" ,"elite"]


// Deleting words
words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present']
const deleteWords = words.filter( (word, index, arr) => {
  arr.pop()
  return word.length < 6
})
console.log(deleteWords) // ["spray" ,"limit"]



/***  Array.prototype.find()  ***/

// Find an object in an array by one of its properties

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

const isCherries = (fruit) => { 
  return fruit.name === 'cherries';
}
console.log(inventory.find(isCherries)); // { name: 'cherries', quantity: 5 }


// Using arrow function and destructuring

const result = inventory.find( ({ name }) => name === 'cherries' );
console.log(result) // { name: 'cherries', quantity: 5 }


// Find a prime number in an array

const isPrime = (element) => {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}
console.log([4, 6, 8, 12].find(isPrime)); // undefined
console.log([4, 5, 8, 12].find(isPrime)); // 5



/***  Array.prototype.findIndex()  ***/

// Find the index of a prime number in an array

const isPrime = (num) => {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2


// Find index using arrow function

const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index); // 3
console.log(fruits[index]); // blueberries



/***  Array.prototype.flat()  ***/

// Flattening nested arrays

const arr1 = [1, 2, [3, 4]];
arr1.flat(); // [1, 2, 3, 4]

const arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat(); // [1, 2, 3, 4, [5, 6]]

const arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2); // [1, 2, 3, 4, 5, 6]

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// Flattening and array holes

const arr5 = [1, 2, , 4, 5];
arr5.flat(); // [1, 2, 4, 5]



/***  Array.prototype.flatMap()  ***/

// reduce() and concat()

let arr = [1, 2, 3, 4];

arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6, 4, 8]
// OR
arr.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]

// map() and flatMap()

let arr1 = [1, 2, 3, 4];
arr1.map(x => [x * 2]); // [[2], [4], [6], [8]]
arr1.flatMap(x => [x * 2]); // [2, 4, 6, 8]
arr1.flatMap(x => [[x * 2]]); // [[2], [4], [6], [8]]

let arr1 = ["it's Sunny in", "", "California"];
arr1.map(x => x.split(" ")); // [["it's","Sunny","in"],[""],["California"]]
arr1.flatMap(x => x.split(" ")); // ["it's","Sunny","in", "", "California"]

// For adding and removing items during a map()

let arr = [5, 4, -3, 20, 17, -33, -4, 18];
arr.flatMap( (n) =>
  (n < 0) ? [] :
  (n % 2 == 0) ? [n] :
  [n-1, 1]
) // [4, 1, 4, 20, 16, 1, 18]



/***  Array.prototype.forEach()  ***/

// Converting a for loop to forEach

const items = ['item1', 'item2', 'item3']
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}

// after
items.forEach(function(item){
  copyItems.push(item)
})


// Modifying the array during iteration

let words = ['one', 'two', 'three', 'four']
words.forEach((word) => {
  if (word === 'two') {
    words.shift()
  }
}) 
console.log(words);  //['two', 'three',​​​​ 'four']


// Flatten an array

const flatten = (arr) => {
  const result = []
  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i))
    } else {
      result.push(i)
    }
  })  
  return result
}
const nested = [1, 2, 3, [[4, 5, [6, 7]], 8, 9]]
flatten(nested) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
