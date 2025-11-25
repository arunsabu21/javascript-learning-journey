/*
The difference() Method
The difference() method returns the difference between two sets.

The difference() method returns a new set containing elements which are in this set but not in the argument set:
*/

const A = new Set(["a", "b", "c"]);
const B = new Set(["b", "c", "d"]);

const C = A.difference(B);

let text = "";
for (const i of C) {
    text += i;
}

console.log(text); // Output: a