// Using the new Keyword
// Create a new JavaScript object using new Object():
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age:50,
  eyeColor: "blue"
});
// Display the Object Content:
let result = person.firstName + " is " + person.age + " years old. ";
console.log(result);

/*
Note:
All the examples above do exactly the same.

There is no need to use new Object().

For readability, simplicity and speed, use an object literal instead.
*/
