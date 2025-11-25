// The has() Method
// The has() method returns true if a specified value exists in a set.

// Create a Set
const mySet = new Set(["a", "b", "c"]);

// Does the Set contain "d"?
answer = mySet.has("d");

// Does the Set contain "b"?
answer1 = mySet.has("b");

console.log(answer); // Output: false
console.log(answer1); // Output: true