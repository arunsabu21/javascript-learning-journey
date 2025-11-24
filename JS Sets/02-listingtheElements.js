// Listing the Elements
// You can list all Set elements (values) with a for..of loop:
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
    text += x;
}
console.log(text); // Output: abc

// Sets are Objects
console.log(typeof letters); // Output: object
