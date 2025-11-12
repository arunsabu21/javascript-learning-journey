# 📚 JavaScript Learning Journey

Welcome! This is a comprehensive collection of my JavaScript learning journey — from fundamental concepts to advanced topics, with practical examples and hands-on implementations. This repository serves as both a learning resource and a reference guide for JavaScript essentials.

Inspired by resources like [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/), this repository is carefully organized for easy navigation and practical application.

---

## 📖 Table of Contents

- [Topics Covered](#topics-covered)
- [Folder Structure](#folder-structure)
- [How to Run](#how-to-run)
- [Learning Path](#learning-path)
- [Purpose & Goals](#purpose--goals)

---

## 📋 Topics Covered

### **1. JS Basics** - Foundation Concepts
- `01-start.js` — Getting started with JavaScript
- `02-variables.js` — Variable declaration and scope
- `03-statements.js` — JavaScript statements and syntax
- `04-operators.js` — Operators overview
- `05-arithmetic.js` — Arithmetic operations (+, -, *, /, %, **)
- `06-assignment.js` — Assignment operators (=, +=, -=, etc.)
- `07-comparison.js` — Comparison operators (==, ===, <, >, <=, >=)

### **2. JS Conditions** - Control Flow Logic
- `01-conditionals.js` — Introduction to conditional statements
- `02-if.js` — if statements and basic conditions
- `03-if_else.js` — if...else structures and branching
- `04-ternary.js` — Ternary operator (condition ? value1 : value2)
- `05-switch.js` — switch...case statements
- `06-booleans.js` — Boolean values and type coercion
- `07-logical-operator.js` — Logical operators (&&, ||, !)

### **3. JS Loops** - Iteration Control
- `01-loops.js` — Loop fundamentals and types
- `02-for-loop.js` — for loop syntax and usage
- `03-while-loop.js` — while and do...while loops
- `04-break.js` — Breaking out of loops
- `05-continue.js` — Skipping iterations with continue

### **4. JS Numbers** - Numeric Operations & Methods
#### Core Number Files:
- `01-numbers.js` — Number basics and data types
- `02-number-methods.js` — Overview of Number methods
- `03-to-string-method.js` — Converting numbers to strings (toString())
- `04-to-exponential-method.js` — toExponential() method
- `05-to-fixed-method.js` — toFixed() for decimal places
- `06-to-precision-method.js` — toPrecision() method
- `07-valueOf-method.js` — valueOf() method
- `08-parseInt-method.js` — parseInt() string to integer conversion
- `09-parseFloat-method.js` — parseFloat() string to float conversion
- `10-isInteger-method.js` — isInteger() type checking
- `11-isFinite-method.js` — isFinite() finite number checking
- `12-isNaN-method.js` — isNaN() NaN detection
- `13-isSafeInteger-method.js` — isSafeInteger() safe integer checking

#### **BigInt/** - Large Integer Operations:
- `01-BigInt.js` — BigInt basics and creation
- `02-BigInt_and_numbers.js` — BigInt with regular numbers

#### **bitwise-operations/** - Bitwise Manipulation:
- `01-bitwise_operator.js` — Bitwise operators overview
- `02-bitwise_AND.js` — AND operation (&)
- `03-bitwise_OR.js` — OR operation (|)
- `04-bitwise_XOR.js` — XOR operation (^)
- `05-bitwise_NOT.js` — NOT operation (~)
- `06-bitwise_left_shift.js` — Left shift (<<)
- `07-bitwise_right_shift.js` — Right shift (>> and >>>)

#### **number-properties/** - Number Constants:
- `01-number-properties.js` — Number properties overview
- `02-EPSILON.js` — Number.EPSILON (smallest difference)
- `03-MAX_VALUE.js` — Number.MAX_VALUE (largest number)
- `04-MIN_VALUE.js` — Number.MIN_VALUE (smallest positive number)
- `05-MIN_SAFE_INTEGER.js` — Minimum safe integer (-2^53 + 1)
- `06-MAX_SAFE_INTEGER.js` — Maximum safe integer (2^53 - 1)
- `07-POSITIVE_INFINITY.js` — Positive infinity constant
- `08-NEGATIVE_INFINITY.js` — Negative infinity constant

### **5. JS Strings** - String Operations & Methods
- `01-strings.js` — String basics and creation
- `02-string-template.js` — Template literals (backticks)
- `03-string-methods.js` — Common string methods (length, indexOf, etc.)
- `04-string-search.js` — Search methods (match, includes, search)
- `05-string-reference.js` — Complete string methods reference

---

## 📁 Folder Structure

```
JS Learning/
│
├── 📂 JS Basics/
│   ├── 01-start.js
│   ├── 02-variables.js
│   ├── 03-statements.js
│   ├── 04-operators.js
│   ├── 05-arithmetic.js
│   ├── 06-assignment.js
│   └── 07-comparison.js
│
├── 📂 JS Conditions/
│   ├── 01-conditionals.js
│   ├── 02-if.js
│   ├── 03-if_else.js
│   ├── 04-ternary.js
│   ├── 05-switch.js
│   ├── 06-booleans.js
│   └── 07-logical-operator.js
│
├── 📂 JS Loops/
│   ├── 01-loops.js
│   ├── 02-for-loop.js
│   ├── 03-while-loop.js
│   ├── 04-break.js
│   └── 05-continue.js
│
├── 📂 JS Numbers/
│   ├── 01-numbers.js through 13-isSafeInteger-method.js
│   ├── 📂 BigInt/
│   │   ├── 01-BigInt.js
│   │   └── 02-BigInt_and_numbers.js
│   ├── 📂 bitwise-operations/
│   │   ├── 01-bitwise_operator.js
│   │   ├── 02-bitwise_AND.js
│   │   ├── 03-bitwise_OR.js
│   │   ├── 04-bitwise_XOR.js
│   │   ├── 05-bitwise_NOT.js
│   │   ├── 06-bitwise_left_shift.js
│   │   └── 07-bitwise_right_shift.js
│   └── 📂 number-properties/
│       ├── 01-number-properties.js
│       ├── 02-EPSILON.js
│       ├── 03-MAX_VALUE.js
│       ├── 04-MIN_VALUE.js
│       ├── 05-MIN_SAFE_INTEGER.js
│       ├── 06-MAX_SAFE_INTEGER.js
│       ├── 07-POSITIVE_INFINITY.js
│       └── 08-NEGATIVE_INFINITY.js
│
├── 📂 JS Strings/
│   ├── 01-strings.js
│   ├── 02-string-template.js
│   ├── 03-string-methods.js
│   ├── 04-string-search.js
│   └── 05-string-reference.js
│
├── sample_template.html    # HTML testing template
└── README.md               # This documentation file
```

---

## ⚙️ How to Run

### Prerequisites
- **Node.js** installed on your system ([Download here](https://nodejs.org/))

### Execution

To run any JavaScript file, open your terminal and execute:

```bash
node filename.js
```

**Example:**
```bash
node "JS Basics/01-start.js"
node "JS Numbers/01-numbers.js"
node "JS Strings/02-string-template.js"
```

### Using HTML Template

For testing JavaScript in a browser context, open `sample_template.html` in your web browser and modify it to include your test code.

---

## 🎯 Learning Path

Follow this recommended sequence to progressively build your JavaScript skills:

1. **Start with Basics** → Master variables, operators, and statements
2. **Learn Conditions** → Understand control flow with if/else and switch
3. **Master Loops** → Practice iteration and loop control
4. **Work with Numbers** → Explore numeric operations and methods
5. **Handle Strings** → Learn string manipulation and methods
6. **Combine Everything** → Create projects using all concepts

---

## 🎓 Purpose & Goals

This repository aims to:

✅ **Track Learning Progress** — Document a structured journey through JavaScript  
✅ **Build Strong Foundations** — Master essential JavaScript concepts  
✅ **Provide Reference Material** — Quick lookup examples for future use  
✅ **Enable Hands-On Practice** — Practical, runnable code examples  
✅ **Create Organization** — Logical folder structure for easy navigation  

---

## 💡 Tips for Learning

- **Run the code** — Execute each file to see the output and understand behavior
- **Experiment** — Modify examples and test different values
- **Take notes** — Add comments to understand concepts better
- **Practice** — Create your own variations before moving on
- **Review** — Revisit earlier topics while learning new ones

---

## 🤝 Contributing

Feel free to explore, fork, and contribute. Suggestions for improvements and additional examples are welcome!

---

## 📝 License

This learning repository is open for personal and educational use.

---

## 🔗 Resources

- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)

---

**Happy Learning! 🚀**

Last updated: November 2025
