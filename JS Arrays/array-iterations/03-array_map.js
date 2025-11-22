/*
JavaScript Array map()
The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

This example multiplies each array value by 2:
*/

const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

console.log(numbers2); // Output: [ 90, 8, 18, 32, 50 ]

function myFunction(value, index, array) {
    return value * 2;
}

// When a callback function uses only the value parameter, the index and array parameters can be omitted: