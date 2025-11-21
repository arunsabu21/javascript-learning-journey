// Reversing an Array
// The reverse() method reverses the elements in an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); // Output: [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// Reverse the array
fruits.reverse();
console.log(fruits); // Output: [ 'Mango', 'Apple', 'Orange', 'Banana' ]

// By combining sort() and reverse(), you can sort an array in descending order:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1);

// First sort the array
fruits1.sort();

// Then reverse it:
fruits1.reverse();

console.log(fruits1); // Output: [ 'Orange', 'Mango', 'Banana', 'Apple' ]