// Adding a Method to an Object
// Adding a new method to an object is easy:

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566
};

// Add a Method
person.name = function() {
  return this.firstName + " " + this.lastName;
};

// Display Object Data
console.log("My Bro is " + person.name());

// Output: My Bro is John Doe