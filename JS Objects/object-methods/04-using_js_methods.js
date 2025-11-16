// Using JavaScript Methods
// This example uses the JavaScript toUpperCase() method to convert a text to uppercase:

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566
};

// Add a Method
person.name = function() {
  return (this.firstName + " " + this.lastName).toUpperCase();
}

// Display Object Data
console.log("My Bro is " + person.name());