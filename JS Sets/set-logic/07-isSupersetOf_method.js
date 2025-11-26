// The isSupersetOf() Method
// The isSupersetOf() method returns true if all elements in the argument set are also in this set:

const A = new Set(["a", "b", "c"]);
const B = new Set(["b", "c", "d"]);

let answer = A.isSupersetOf(B);
console.log(answer); // false

