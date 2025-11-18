// JavaScript Array delete()
// Using delete() leaves undefined holes in the array.

// Use pop() or shift() instead.

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("The first fruit is: " + fruits[0]); // Output: The first fruit is: Banana

delete fruits[0];
console.log("The first fruit is: " + fruits[0]); // Output: The first fruit is: undefined