// JavaScript Maps
/*
The Map Object
A Map object holds key-value pairs where the keys can be any datatype.

A Map also remembers the original insertion order of the keys.

How to Create a Map
You can create a JavaScript Map by:

Passing an Array to new Map()
Create a Map and use Map.set()
*/

// The new Map() Method
// You can create a Map by passing an Array to the new Map() constructor:

// Create a map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

let num = fruits.get("apples");
console.log(num); // Output: 500
let num1 = fruits.get("bananas");
console.log(num1); // Output: 300
let num2 = fruits.get("oranges");
console.log(num2); // Output: 200

// The set() Method
// You can add elements to a Map with the set() method:
const list = new Map();

list.set("apples", 500);
list.set("bananas", 300);
list.set("oranges", 200);

let result = list.get("apples");
console.log(result);

// Maps are Objects