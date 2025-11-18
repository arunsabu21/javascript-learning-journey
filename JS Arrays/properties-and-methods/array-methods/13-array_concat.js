/*
Merging Arrays (Concatenating)
In programming languages, concatenation means joining strings end-to-end.

Concatenation "snow" and "ball" gives "snowball".

Concatenating arrays means joining arrays end-to-end.
*/

// JavaScript Array concat()
// The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);

console.log(myChildren); // Output: [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ]

// The concat() method does not change the existing arrays. It always returns a new array.

// The concat() method can take any number of array arguments.

// Example (Merging Three Arrays)
const array1 = ["Cecilie", "Lone"];
const array2 = ["Emil", "Tobias", "Linus"];
const array3 = ["Robin", "Morgan"];

const result = array1.concat(array2,array3);
console.log(result);

// The concat() method can merge string values to arrays:
const array = ["Emil", "Tobias", "Linus"];
const result1 = array.concat("Peter");
console.log(result1);