/*
Associative Arrays
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes. 
*/

const person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46;

console.log(person[0] + " " + person.length); // Output: John 3


// If you use named indexes, JavaScript will redefine the array to an object.

// After that, some array methods and properties will produce incorrect results.
const person1 = [];
person1["firstName"] = "John";
person1["lastName"] = "Doe";
person1["age"] = 46;

console.log(person1[0] + " " + person1.length); // Output: undefined 0


// JavaScript new Array()
// JavaScript has a built-in array constructor new Array().

// But you can safely use [] instead.
// const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];
console.log(points[0]);
