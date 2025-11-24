// Map.has()
// The has() method returns true if a key exists in a map:

// Create a map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log(fruits.has("apples")); // Output: true
console.log(fruits.has("kiwi")); // Output: false