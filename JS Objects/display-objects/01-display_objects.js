// JavaScript Display Objects
// Displaying a JavaScript object will output [object Object].

// Create an object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display Object
let text = person;
console.log(person);

/*
Some solutions to display JavaScript objects are:

Displaying the Object Properties by name
Displaying the Object Properties in a Loop
Displaying the Object using Object.values()
Displaying the Object using JSON.stringify()
*/

// Displaying Object Properties
// The properties of an object can be added in a string:

// Create an Object
const person1 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display Properties
let text1 = person.name + ", " + person.age + ", " + person.city;
console.log(text1);

// Using a For .. In Loop
// The properties of an object can be collected in a loop:

// Create an Object
const person2 = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text2 = "";
for (let x in person2) {
  text2 += person2[x] + "";
};

// Display the Text
console.log(text2);