// Object Properties

/*
An Object is an Unordered Collection of Properties
Properties are the most important part of JavaScript objects.

Properties can be changed, added, deleted, and some are read only.
*/

// You can access object properties in two ways:

// 1) objectName.propertyName
// 2) objectName["propertyName"]


// 1) objectName.propertyName
// Access a Property with .
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person.firstName + " is " + person.age);

// 2) objectName["propertyName"]
// Access a Property with []
console.log(person["firstName"] + " is " + person["age"] + " years old. ");

// Accessing a Property with an Expression
let x = "firstName";
let y = "age";
console.log(person[x] + " is " + person[y] + " years old. ");

// Adding a new Property
person.nationality = "English";
console.log(person.firstName + " is " + person.nationality);


