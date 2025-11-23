// Map.get()
// You get the value of a key in a map with the get() method
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let result = fruits.get("oranges");
console.log(result);