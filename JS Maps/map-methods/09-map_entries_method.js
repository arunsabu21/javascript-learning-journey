// Map.entries()
// The entries() method returns an iterator object with the [key,values] in a map:

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// List all entries
let text = "";
for (const x of fruits.entries()) {
    text += x + "\n";
}

console.log(text);