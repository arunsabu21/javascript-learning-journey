// The isDisjointFrom() Method
// The isDisjointFrom() method returns true if this set has no elements in common with the argument set:

const A = new Set(["a", "b", "c"]);
const B = new Set(["b", "c", "d"]);

answer = A.isDisjointFrom(B);
console.log(answer); // Output: false