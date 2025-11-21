// JavaScript Array lastIndexOf()
// Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.

// Search an array for the item "Apple":
const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.lastIndexOf("Apple") + 1;
console.log("Apple is found in position " + position);
