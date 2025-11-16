// JavaScript Arrays
const cars = ["Saab", "Volvo", "BWM"];
console.log(cars);

/*
An Array is an object type designed for storing data collections.

Key characteristics of JavaScript arrays are:

Elements: An array is a list of values, known as elements.

Ordered: Array elements are ordered based on their index.

Zero indexed: The first element is at index 0, the second at index 1, and so on.

Dynamic size: Arrays can grow or shrink as elements are added or removed.

Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).
*/

// You can also create an empty array, and provide elements later:
const Cars =[];
Cars[0] = "Saab";
Cars[1] = "Volvo";
Cars[2] = "BMW";
console.log(Cars);

// Using the JavaScript Keyword new
const CarsList = new Array("Saab", "Volvo", "BMW");
console.log(CarsList);

/*
Note
The two examples above do exactly the same.

There is no need to use new Array().

For simplicity, readability and execution speed, use the array literal method.
*/