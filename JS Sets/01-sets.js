/*
JavaScript Sets
A JavaScript Set is a collection of unique values.

Each value can only occur once in a Set.

The values can be of any type, primitive values or objects.

How to Create a Set
You can create a JavaScript Set by:

Passing an array to new Set()
Create an empty set and use add() to add values
*/

// The new Set() Method
// Pass an array to the new Set() constructor:


// Create a Set
const letters = new Set(["a", "b", "c"]);

// Display set.size
console.log(letters.size);


// Create an empty set and use add() to add values
const l = new Set();

// Add Values to the Set
l.add("a");
l.add("b");
l.add("c");

console.log(l);