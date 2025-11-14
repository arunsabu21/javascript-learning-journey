// Property Default Values
// A value given to a property will be a default value for all objects created by the constructor:

// Object Constructors
// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";
}

// Create 2 Person objects
const myBrother = new Person("John", "Doe", 50, "blue");
const myCousin = new Person("Sally", "Rally", 48, "green");

// Display nationality
console.log("My brother is " + myBrother.nationality + ". My cousin is " + myCousin.nationality);