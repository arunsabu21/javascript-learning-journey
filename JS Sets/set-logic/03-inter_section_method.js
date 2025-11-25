/*
The intersection() Method
The intersection() method returns the intersection of two sets.

The intersection() method returns a new set containing the elements which are in this set and in the argument set:
*/

const A = new Set(["a", "b", "c"]);
const B = new Set(["b", "c", "d"]);

const C = A.intersection(B);

let text = "";
for (const i of C) {
    text += i;
}

console.log(text); // Output: bc