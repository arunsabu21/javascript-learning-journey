/*
Splicing and Slicing Arrays
The splice() method adds new items to an array.

The slice() method slices out a piece of an array.
*/

// JavaScript Array splice()
// The splice() method can be used to add new items to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);