/*
Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.

Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.
*/

// JavaScript Array flat()
// ES2019 Introduced the Array flat() method.

// The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2], [3,4], [5,6]];
const newArr = myArr.flat();
console.log(newArr); // Output: [ 1, 2, 3, 4, 5, 6 ]