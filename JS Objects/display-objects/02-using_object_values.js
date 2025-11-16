// Using Object.values()
// Object.values() creates an array from the property values:

// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
}

// Create an Array from the Properties
const myArray = Object.values(person);

// Stringify the Array
let text = myArray.toString();

// Display Data
console.log(text); // Output: John,30,New York