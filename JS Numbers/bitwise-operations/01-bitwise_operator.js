/* 
 Bitwise Operators in JavaScript
 -----------------------------------------------
 Operator | Name                  | Description
 -----------------------------------------------
   &      | AND                   | 1 only if both bits are 1
   |      | OR                    | 1 if any one bit is 1
   ^      | XOR                   | 1 only if bits are different
   ~      | NOT                   | Inverts all bits
   <<     | Left Shift            | Shift left, add 0s on the right
   >>     | Signed Right Shift    | Shift right, keep sign bit
   >>>    | Zero-fill Right Shift | Shift right, add 0s on the left
 -----------------------------------------------
*/

/*
 Bitwise Operation Examples
 ---------------------------------------------------------------
 Operation    | Result | Binary Operation        | Binary Result
 ---------------------------------------------------------------
 5 & 1        |   1    | 0101 & 0001             | 0001
 5 | 1        |   5    | 0101 | 0001             | 0101
 ~5           |  -6    | ~0101                   | 1010  (Note: ~5 = -6 in JS)
 5 << 1       |  10    | 0101 << 1               | 1010
 5 ^ 1        |   4    | 0101 ^ 0001             | 0100
 5 >> 1       |   2    | 0101 >> 1               | 0010
 5 >>> 1      |   2    | 0101 >>> 1              | 0010
 ---------------------------------------------------------------
*/

