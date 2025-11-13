// Local Variables
// Variables declared inside a function are LOCAL to that function.

let text = "Outside: " + typeof carName;  // carName is not defined yet
console.log(text);  // Output: Outside: undefined

function myFunction() {
  let carName = "Volvo";  // Local variable
  let text1 = "Inside: " + typeof carName + " " + carName;
  console.log(text1);  // Output: Inside: string Volvo
}

myFunction();  // Call the function
