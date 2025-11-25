/*
The symmetricDifference() Method
The symmetricDifference() method returns the symmetric difference between to sets.

The symmetricDifference() method returns a new set containing elements which are in this set or in the argument set, but not in both:
*/

const A = new Set(["a", "b", "c"]);
const B = new Set(["b", "c", "d"]);

const C = A.symmetricDifference(B);

let text = "";
for (const i of C) {
    text += i;
}

console.log(text); // Output: ad