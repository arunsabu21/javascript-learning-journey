// JavaScript Objects

/*
An Object is a variable that can hold many variables.

Objects are collections of key-value pairs, where each key (known as property names) has a value.

Objects can describe anything like houses, cars, people, animals, or any other subjects.
*/

// This code assigns many values (Fiat, 500, white) to an object named car:

// Create an object
const car = {type: "Fiat", model: "500", color: "White"};

// Display Data from the Object:
console.log("The car type is" + " " + car.type);
console.log("The car model is" + " " + car.model);
console.log("The car color is" + " " + car.color);

/*
Note:
You should declare objects with the const keyword.

When an object is declared with const, you cannot later reassign it to point to a different variable.

It does not make the object unchangeable. You can still modify its properties and values.
*/

// How to Create a JavaScript Object
// An object literal is a concise way to create an object.

// An object literal is a list of key : value pairs inside curly braces { }:

// {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
// In object terms, the key : value pairs are the object properties.

// Example
// All the examples below, create a JavaScript object with 4 properties.

// Create an Object:
const person = {firstName: "John", lastName: "Doe", age:50, eyeColor: "blue"};
// Display Data from the Object:
console.log(person);
console.log(person.firstName + " is " + person.age + " Years old ");
console.log(typeof(person));
// Spaces and line breaks are not important. An object literal can span multiple lines.
