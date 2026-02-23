// ========== Task ==========

// Task: checkValue(a, b)
// Write a function called checkValue that takes two parameters:
//   * a: number
//   * b: boolean

// The function should return true if any of the following conditions are met:
//  1. When b is true:
//     * a is negative and in the range of -4 to -1 (inclusive).
//     * OR a is less than -8.
//     * OR a is positive and:
//       * is between 1 and 4 (inclusive).
//       * OR is greater than 8.
//  2. When b is false:
//     * a is not 0.

// In all other cases, the function should return false.

// Examples
// checkValue(3, true) ==> true
// checkValue(0, false) ==> false
// checkValue(0, true) ==> false
// checkValue(-5, true) ==> false

function checkValue(a, b) {
  return b
    ? (a >= -4 && a <= -1) || a < -8 || (a >= 1 && a <= 4) || a > 8
    : a !== 0;
}

console.log(checkValue(3, true)); // true
console.log(checkValue(0, false)); // false
console.log(checkValue(0, true)); // false
console.log(checkValue(-5, true)); // false
