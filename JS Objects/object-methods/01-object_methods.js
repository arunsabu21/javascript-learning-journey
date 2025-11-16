// JavaScript Object Methods
// Object methods are actions that can be performed on objects.

// A method is a function definition stored as a property value.
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

console.log(person.fullName());