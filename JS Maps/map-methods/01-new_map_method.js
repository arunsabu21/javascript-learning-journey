// The new Map() Method
// You can create a map by passing an array to the new Map() constructor:
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let result = fruits.get("apples");

console.log(result);