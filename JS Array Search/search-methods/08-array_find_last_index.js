// JavaScript Array findLastIndex() Method
// The findLastIndex() method finds the index of the last element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let pos = temp.findLastIndex(x => x > 40);
console.log("The last temperature over 40 was in position " + pos);