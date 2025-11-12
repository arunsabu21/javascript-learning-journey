// JavaScript Sign Preserving Right Shift (>>)
// Moves bits to the right, preserving the sign (leftmost bit remains the same).
// Negative numbers keep their sign bit (1).
// Each right shift divides the number by 2 and rounds down.

let x = -5 >> 1;  // 1111 1011 → 1111 1101
console.log("-5 signed shift right 1 is " + x);  // Output: -3
