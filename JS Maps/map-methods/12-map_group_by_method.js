/*
JavaScript Map.groupBy()
ES2024 added the Map.groupBy() method to JavaScript.

The Map.groupBy() method groups elements of an object according to string values returned from a callback function.

The Map.groupBy() method does not change the original object
*/

// Create a Map
const fruits = [
    {name: "apples", quantity: 300},
    {name: "bananas", quantity: 500},
    {name: "oranges", quantity: 200},
    {name: "kiwi", quantity: 150}
];

// Callback function to select low volumes 
function myCallback({quantity}) {
    return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Map.groupBy(fruits, myCallback);

// Display Results
let text ="These fruits are Ok: \n";
for (let x of result.get("ok")) {
    text += x.name + " " + x.quantity + "\n";
}
text += "These fruits are low: \n";
for (let x of result.get("low")) {
    text += x.name + " " + x.quantity + "\n";
}

console.log(text);

// Output:
// These fruits are Ok: 
// apples 300
// bananas 500
// These fruits are low:
// oranges 200
// kiwi 150