// Map.keys()
// The keys() method returns an iterator object with the keys in a map:

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// List all keys
let text = "";
for (const x of fruits.keys()) {
    text += x + "\n";
}

console.log(text);

// Output:
// apples
// bananas
// oranges
