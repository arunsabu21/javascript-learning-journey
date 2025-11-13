// Parameters vs. Arguments
// In JavaScript, function parameters and arguments are distinct concepts:

// Parameters are the names listed in the function definition.

// Parameters are the names of the values that will be passed.

// Example
// "name" and "age" are parameters:
function greet(name, age) {
  return "Hello" + name + "! You are" + age + "Years old.";
}

console.log(greet("John", 21));


// Arguments are the values passed to the function when it is invoked or called.

// Arguments are the values received by the function.
function Greet(name1, age1) { // name and age are parameters
  return "Hello" + name1 + "!You are" + age1 + "Years old";
}
console.log(Greet("John", 21));