// JavaScript Array flatMap()
// ES2019 added the Array flatMap() method to JavaScript.

// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr); // Output: [1,10,2,20,3,30,4,40,5,50,6,60]

// flatMap() does 2 things at the same time:

// 1️⃣ map → transforms each element
// 2️⃣ flat → flattens the array (removes nested structure)