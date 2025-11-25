// The keys() Method
// The keys() method returns an Iterator object with the values in a Set:

// A Set has no keys, so keys() returns the same as values().

const letters = new Set(["a", "b", "c"]);
const myIterator = letters.keys();

let text = "";
for (const x of myIterator) {
    text += x + "\n";
}

console.log(text);

// Output: 
// a
// b
// c