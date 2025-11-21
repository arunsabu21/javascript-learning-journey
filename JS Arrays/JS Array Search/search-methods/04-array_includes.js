// JavaScript Array includes()
// ECMAScript 2016 introduced Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

// Check if the fruit array contains "Mango":
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Mango")); // Output: true
// Array.includes() allows to check for NaN values. Unlike Array.indexOf().
