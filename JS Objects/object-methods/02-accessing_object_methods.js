// Accessing Object Methods
// You access an object method with the following syntax:

// objectName.methodName()

// If you invoke the fullName property with (), it will execute as a function:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.fullName());

// If you access it without (), it will return the function definition:
const person1 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person1.fullName); // Output: [Function: fullName]