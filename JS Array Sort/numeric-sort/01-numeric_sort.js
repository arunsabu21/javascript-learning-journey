/*
Numeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

Numeric Sort
Random Sort
Math.min()
Math.max()
Home made Min()
Home made Max()
*/

const points = [40, 100, 1, 5, 25, 10];
console.log(points); // Output: [40, 100, 1, 5, 25, 10]

points.sort(function(a,b) {return a - b});
console.log(points); // Output: [ 1, 5, 10, 25, 40, 100 ]

// Use the same trick to sort an array descending:
const points1 = [40, 100, 1, 5, 25, 10];
points1.sort(function(a,b) {return b - a});
console.log(points1); // Output: [ 100, 40, 25, 10, 5, 1 ]


// Compare Function
/*
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}
When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.

Example:

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:
*/
