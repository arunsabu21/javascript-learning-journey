// The isSubsetOf() Method
// The isSubsetOf() method returns true if all elements in this set is also elements in the argument set:

const A = new Set(["a", "b", "c"]);
const B = new Set(['b','c','d']);

const C = A.isSubsetOf(B);

console.log(C); // Output: false