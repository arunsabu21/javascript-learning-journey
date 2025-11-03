// Comparison Operators
// Comparison operators are used to compare two values.
// Comparison operators always return true or false

// x = 5

// Operator            Description            Comparing          Returns

// ==                  equal to               x == 8              false

//                                            x == 5              true

//                                            x == "5"            true

// ===                 equal value and type   x === 5             true

//                                            x === "5"           false

// !=                  not equal              x != 8              true

// !==                 not equal or type      x !== 5              false

//                                            x !== "5"            true

//                                            x !== 8              true

// >                   greater than           x > 8                false

// <                   less than              x < 8                true

// >=                  greater than or equal to x >= 8             false

// <=                  less than or equal to  x <= 8               true



// JavaScript String Comparison
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log("Is A less than B?" + result)

let N1 = "20";
let N2 = "5";
let result2 = N1 < N2;
console.log("Is 20 less than 5?:" + result2)

// Input your age and click the button:

function myFunction () {
  let voteable;
  let age = Number (document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "Input is not a number";
  } else {
    voteable = (age < 18) ? "Too young" : "Old enough";
  }
  document.getElementById("demo").innerHTML = voteable + " to vote";
}