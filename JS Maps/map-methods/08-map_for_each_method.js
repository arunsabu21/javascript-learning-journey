// Map.forEach()
// The forEach() method invokes a callback for each key/value pair in a map:

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// List all entries
let text = "";
fruits.forEach(function(value, key) {
    text += key + ' = ' + value + "\n"; 
});

console.log(text);

// Output:
// apples = 500
// bananas = 300
// oranges = 200