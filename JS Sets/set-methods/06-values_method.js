// The values() Method
// The values() method returns an Iterator object with the values in a Set:
const letters = new Set(["a", "b", "c"]);

// Create an iterator
const myIterator = letters.values();

// List all Elements
let text = "";
for (const x of myIterator) {
    text += x + "\n";
}

console.log(text);