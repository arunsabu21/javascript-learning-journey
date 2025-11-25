// The forEach() Method
// The forEach() method invokes a function for each Set element:

// Create a Set
const letters = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
    text += value + "\n";
});

console.log(text);

// Output:
// a
// b
// c