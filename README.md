# JavaScript Learning Journey

Welcome! This repository contains a complete record of the JavaScript learning materials, examples, and notes. It serves as a reference and practice space for core JavaScript concepts.

Inspired by resources such as [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/) and MDN, the content is arranged for gradual learning and quick lookup.

---

## Status

All core topics in this repository have been completed and reviewed as of December 1, 2025.

---

## Topics Covered

### 1. JS Basics — Foundation Concepts
- `01-start.js` — Getting started with JavaScript
- `02-variables.js` — Variable declaration and scope
- `03-statements.js` — JavaScript statements and syntax
- `04-operators.js` — Operators overview
- `05-arithmetic.js` — Arithmetic operations
- `06-assignment.js` — Assignment operators
- `07-comparison.js` — Comparison operators

### 2. JS Conditions — Control Flow Logic
- `01-conditionals.js` — Conditional statements
- `02-if.js` — if statements
- `03-if_else.js` — if...else structures
- `04-ternary.js` — Ternary operator
- `05-switch.js` — switch...case statements
- `06-booleans.js` — Boolean values and coercion
- `07-logical-operator.js` — Logical operators

### 3. JS Loops — Iteration Control
- `01-loops.js` — Loop fundamentals
- `02-for-loop.js` — for loops
- `03-while-loop.js` — while and do...while loops
- `04-break.js` — break
- `05-continue.js` — continue

### 4. JS Functions — Function Concepts
- `01-function.js` — Function declaration and invocation
- `02-function_invocation.js` — Function calls and returns
- `03-arrow_functions.js` — Arrow functions and `this`
- `04-local_variables.js` — Local scope
- `05-parameters_vs_arguments.js` — Parameters vs arguments
- `06-function_parameters.js` — Default parameters
- `07-rest_parameter.js` — Rest parameters (`...args`)
- `08-arguments_object.js` — `arguments` object

### 5. JS Numbers — Numeric Operations & Methods
- `01-numbers.js` through `13-isSafeInteger-method.js` — Number methods and checks
- BigInt, bitwise operations, and number-properties subtopics included

### 6. JS Strings — String Operations & Methods
- `01-strings.js` — String basics
- `02-string-template.js` — Template literals
- `03-string-methods.js` — Common string methods
- `04-string-search.js` — Search methods
- `05-string-reference.js` — Reference material

### 7. JS Objects — Object Basics
- `01-objects.js` — Object creation, properties, and methods
- Subfolders: `display-objects`, `object-methods`, `object-properties`

### 8. JS Arrays — Array Basics & Methods
- `01-JS_Arrays.js` — Array creation and basics
- `02-accessing_array_elements.js` — Accessing by index
- `03-change_array_element.js` — Modifying elements
- `04-array_to_string.js` — Convert arrays to strings
- `properties-and-methods/01-properties_and_methods.js` — Array properties and methods

### 9. JS Programming — Advanced Concepts and Patterns
- `01-scope.js` — Scope and accessibility
- `02-function_scope.js` — Function scope examples
- `03-hoisting.js` — Hoisting behavior
- `04-strict_mode.js` — Using strict mode
- `05-code_blocks.js` — Block-level concepts

### 10. JS Sets — Set Data Structure
- `01-sets.js` — Creating and using Sets
- `02-listingtheElements.js` — Iterating over Sets
- `02-setWithVariables.js` — Using variables with Sets
- Subfolders: `set-logic`, `set-methods`

### 11. JS Projects
- `student_marks.js` — Project example: student marks

---

## Folder Structure

```
JS Learning/
│
├── JS Basics/
│   ├── 01-start.js
│   ├── 02-variables.js
│   ├── 03-statements.js
│   ├── 04-operators.js
│   ├── 05-arithmetic.js
│   ├── 06-assignment.js
│   └── 07-comparison.js
│
├── JS Conditions/
│   ├── 01-conditionals.js
│   ├── 02-if.js
│   ├── 03-if_else.js
│   ├── 04-ternary.js
│   ├── 05-switch.js
│   ├── 06-booleans.js
│   └── 07-logical-operator.js
│
├── JS Loops/
│   ├── 01-loops.js
│   ├── 02-for-loop.js
│   ├── 03-while-loop.js
│   ├── 04-break.js
│   └── 05-continue.js
│
├── JS Functions/
│   ├── 01-function.js
│   ├── 02-function_invocation.js
│   ├── 03-arrow_functions.js
│   ├── 04-local_variables.js
│   ├── 05-parameters_vs_arguments.js
│   ├── 06-function_parameters.js
│   ├── 07-rest_parameter.js
│   └── 08-arguments_object.js
│
├── JS Numbers/
│   ├── 01-numbers.js through 13-isSafeInteger-method.js
│   ├── BigInt/
│   ├── bitwise-operations/
│   └── number-properties/
│
├── JS Strings/
│   ├── 01-strings.js
│   ├── 02-string-template.js
│   ├── 03-string-methods.js
│   ├── 04-string-search.js
│   └── 05-string-reference.js
│
├── JS Arrays/
│   ├── 01-JS_Arrays.js
│   ├── 02-accessing_array_elements.js
│   ├── 03-change_array_element.js
│   ├── 04-array_to_string.js
│   └── properties-and-methods/
│       └── 01-properties_and_methods.js
│
├── JS Objects/
│   ├── 01-objects.js
│   ├── 02-using_new_keyword.js
│   ├── display-objects/
│   ├── object-methods/
│   └── object-properties/
│
├── JS Programming/
│   ├── 01-scope.js
│   ├── 02-function_scope.js
│   ├── 03-hoisting.js
│   ├── 04-strict_mode.js
│   └── 05-code_blocks.js
│
├── JS Sets/
│   ├── 01-sets.js
│   ├── 02-listingtheElements.js
│   ├── 02-setWithVariables.js
+│   ├── set-logic/
+│   └── set-methods/
│
├── JS Projects/
│   └── student_marks.js
│
├── sample_template.html    # HTML testing template
└── README.md               # This documentation file
```

---

## How to Run

### Prerequisites
- Node.js installed on your system (https://nodejs.org/)

### Execution

Run any JavaScript file using Node.js from the repository root:

```powershell
node "path\to\file.js"
```

Examples:

```powershell
node "JS Basics/01-start.js"
node "JS Numbers/01-numbers.js"
node "JS Strings/02-string-template.js"
```

### Using HTML Template

Open `sample_template.html` in a browser to test DOM-related examples.

---

## Learning Path

1. Start with Basics — variables, operators, and statements
2. Learn Conditions — control flow with if/else and switch
3. Master Loops — iteration and loop control
4. Work with Numbers — numeric operations and methods
5. Handle Strings — string manipulation and methods
6. Combine Everything — build projects using the concepts

---

## Purpose & Goals

- Track learning progress and exercises
- Build strong foundations in JavaScript
- Provide practical, runnable examples and references

---

## Tips for Learning

- Run the code to observe behavior
- Experiment by changing values and functions
- Add comments and notes for concepts that are unclear
- Practice by creating small exercises based on examples

---

## Contributing

Contributions and suggestions are welcome. If you add files or folders, please follow the existing naming conventions.

---

## License

This repository is intended for personal and educational use.

---

## Resources

- MDN Web Docs - JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- W3Schools JavaScript Tutorial: https://www.w3schools.com/js/
- JavaScript.info: https://javascript.info/
- Eloquent JavaScript: https://eloquentjavascript.net/

---

Last updated: December 1, 2025
