/***  Array.prototype.sort()  ***/

let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

// Creating, displaying, and sorting an array

let stringArray = ['Blue', 'Humpback', 'Beluga'];
let numberArray = [40, 1, 5, 200];
let numericStringArray = ['80', '9', '700'];
let mixedNumericArray = ['80', '9', '700', 40, 1, 5, 200];

const compareNumbers = (a, b) => {
  return a - b;
}

console.log('stringArray:', stringArray.join()); // Blue,Humpback,Beluga
console.log('Sorted:', stringArray.sort()); // Beluga,Blue,Humpback

console.log('numberArray:', numberArray.join()); // 40,1,5,200
console.log('Sorted without a compare function:', numberArray.sort()); // 1,200,40,5
console.log('Sorted with compareNumbers:', numberArray.sort(compareNumbers)); // 1,5,40,200

console.log('numericStringArray:', numericStringArray.join()); // 80,9,700
console.log('Sorted without a compare function:', numericStringArray.sort()); // 700,80,9
console.log('Sorted with compareNumbers:', numericStringArray.sort(compareNumbers)); // 9,80,700

console.log('mixedNumericArray:', mixedNumericArray.join()); // 80,9,700,40,1,5,200
console.log('Sorted without a compare function:', mixedNumericArray.sort()); // 1,200,40,5,700,80,9
console.log('Sorted with compareNumbers:', mixedNumericArray.sort(compareNumbers)); // 1,5,9,40,80,200,700

// Sorting non-ASCII characters / String

let items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort((a, b) => {
  return a.localeCompare(b);
}); // ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']



/***  Array.prototype.splice()  ***/

// Remove 0 (zero) elements before index 2, and insert "drum"

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')
/*
  myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"] 
  removed is [], no elements removed
*/


// Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')
/*
  myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"] 
  removed is [], no elements removed
*/


// Remove 1 element at index 3

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1) 
/*
  myFish is ["angel", "clown", "drum", "sturgeon"]
  removed is ["mandarin"] 
*/


// Remove 1 element at index 2, and insert "trumpet"

let myFish = ['angel', 'clown', 'drum', 'sturgeon']
let removed = myFish.splice(2, 1, 'trumpet')
/*
  myFish is ["angel", "clown", "trumpet", "sturgeon"]
  removed is ["drum"]
 */


// Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

let myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue')
/*
  myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
  removed is ["angel", "clown"]
*/


// Remove 2 elements from index 2

let myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
let removed = myFish.splice(2, 2)
/*
  myFish is ["parrot", "anemone", "sturgeon"] 
  removed is ["blue", "trumpet"]
*/


// Remove 1 element from index -2

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(-2, 1)
/*
  myFish is ["angel", "clown", "sturgeon"] 
  removed is ["mandarin"]
*/


// Remove all elements from index 2

let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2)
/*
  myFish is ["angel", "clown"]
  removed is ["mandarin", "sturgeon"]
*/



/***  Array.prototype.toLocaleString()  ***/

const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
console.log(localeString); // "1,a,12/21/1997, 2:12:00 PM",



/***  Array.prototype.toString()  ***/

const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString()); // "1,2,a,1a"



/***  Array.prototype.unshift()  ***/

let arr = [1, 2]
arr.unshift(0) // [0, 1, 2]
arr.unshift(-2, -1) // [-2, -1, 0, 1, 2]
arr.unshift([-4, -3]) // [[-4, -3], -2, -1, 0, 1, 2]
arr.unshift([-7, -6], [-5]) // [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]



/***  Array.prototype.values()  ***/

// Iteration using for...of loop

const arr = ['a', 'b', 'c', 'd', 'e'];
let iterator = arr.values();

for (let letter of iterator) {
  console.log(letter);
}  //"a" "b" "c" "d" "e"


// Iteration using .next()

const arr = ['a', 'b', 'c', 'd', 'e'];
let iterator = arr.values(); 
iterator.next();               // Object { value: "a", done: false }
iterator.next().value;         // "b"
iterator.next()["value"];      // "c"
iterator.next();               // Object { value: "d", done: false }
iterator.next();               // Object { value: "e", done: false }
iterator.next();               // Object { value: undefined, done: true } 
iteraror.next().value;         // undefined 

const arr = ['a', 'b', 'c', 'd', 'e']; 
let iterator = arr.values();
console.log(iterator);        // Array Iterator {  }
iterator.next().value;        // "a"
arr[1]='n';                 
iterator.next().value;        //  "n"
