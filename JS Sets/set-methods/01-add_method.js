// The add() Method
// The add() method adds values to a set:

const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

console.log(letters); // Output: Set(3) { 'a', 'b', 'c' }
// If you add equal elements, only the first will be saved: