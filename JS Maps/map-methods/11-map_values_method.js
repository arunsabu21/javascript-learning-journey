// Map.values()
// The values() method returns an iterator object with the values in a map:

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// List the values
let text = "";
for (const x of fruits.values()) {
    text += x + "\n";
}

console.log(text);

// Output:
// 500
// 300
// 200

// You can use the values() method to sum the values in a map:
let total = 0;
for (const x of fruits.values()) {
    total += x;
}

console.log(total); // Output: 1000