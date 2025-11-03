if (new Date().getHours() < 18) {
  console.log("Good day!");
} else {
  console.log("Good Evening");
}

// // Checks if someone of age 18 can drive
let age = 18;
let text = "You can Not Drive!";

if (age >= 18) {
  text = "You can drive!";
}

console.log(text);

// Nested if
// You can use an if statement inside another if statement:

let a = 16;
let country = "USA";
let message = "You can Not Drive!";

if (country == "USA") {
  if (a >= 16) {
    message = "You Can Drive!";
  }
}

console.log(message)

// logical AND operator:

let ag = 16;
let cntry = "USA";
let t = "You can Not drive!";

if (cntry == "USA" && ag >= 16) {
  t = "You can drive!";
}

console.log(t)

let mark = 23;

if (mark >= 24) {
  console.log("Yeah You are passed")
} else {
  console.log("You are failed")
}



