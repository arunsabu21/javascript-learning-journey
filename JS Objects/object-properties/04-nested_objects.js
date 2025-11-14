// Nested Objects
// Property values in an object can be other objects:

// You can access nested objects using the dot notation or the bracket notation:

// Create nested Objects
const myObj = {
  name: "John",
  age: 30,
  myCars : {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
}
console.log(myObj.myCars.car2);
// bracket notation:
console.log(myObj.myCars["car2"]);

// myObj
//   └─ myCars
//         └─ car2
