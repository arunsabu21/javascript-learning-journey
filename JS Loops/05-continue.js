// JavaScript Continue

/*
The Continue Statement
The continue statement skips the current iteration in a loop.

The remaining code in the iteration is skipped and processing moves to the next iteration.
*/

// Skip the iteration step when i equals 3.

let text = "";

for (let i = 1; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text += i * 10 + " ";
}
console.log(text);

// Continue to Labelname

// Syntax
// continue labelname;

// Continue to loop1:
let t = "";
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) {
      continue loop1;
    }
    t += i + " ";
  }
}

console.log(t);

// Continue to loop2:

let t2 = "";
loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) {
      continue loop2;
    }
    t2 += i + " ";
  }
}
console.log(t2);

/*
| Outer Loop (`j`) | Inner Loop (`i`) | Condition (`i===3`) | `continue loop1` Action      | `continue loop2` Action              |
| ---------------- | ---------------- | ------------------- | ---------------------------- | ------------------------------------ |
| 1                | 1                | ❌                   | add `1`                      | add `1`                              |
| 1                | 2                | ❌                   | add `2`                      | add `2`                              |
| 1                | 3                | ✅                   | 🚀 skip **outer** → next `j` | ⚙️ skip **this inner** → go to `i=4` |
| 1                | 4                | ❌                   | ❌ skipped                   | add `4`                              |
| 2                | 1                | ❌                   | add `1`                      | add `1`                              |
| 2                | 2                | ❌                   | add `2`                      | add `2`                              |
| 2                | 3                | ✅                   | skip outer → next `j`        | skip only inner (no 3)               |
| 2                | 4                | ❌                   | ❌ skipped                   | add `4`                              |
| ...              | ...              | ...                   | ...                          | ...                                  |
*/
