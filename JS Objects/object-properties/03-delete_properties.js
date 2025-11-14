// Deleting Properties
// The delete keyword deletes a property from an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
}

// delete
delete person.age;
// or
// delete person["age"];
console.log(person.firstName + " is " + person.age + " years old. ");

