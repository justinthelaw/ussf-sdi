// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Example 4:
// Input: x = 0
// Output: 0

// Constraints:
// -2^31 <= x <= 2^31 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  //Stringify the integer
  let xString = x.toString();
  //return xString;
  let reverseArrayString = [];

  //For loop each character
  for (let i = xString.length - 1; i > -1; i--) {
    //Perform loop starting with last character in integer
    //Push last character into an array
    reverseArrayString.push(xString[i]);
  }

  //Join array back into integer
  let reverseX = Number.parseInt(reverseArrayString.join(""));

  if (x < 0) {
    reverseX *= -1;
  }

  //Define range for 32-bits
  let bottom = -(2 ** 31);
  let top = 2 ** 31 - 1;

  //If integer is within range, return integer
  if (reverseX >= bottom && reverseX <= top) {
    return reverseX;
  } else {
    return 0;
  }
  //Else falls outside of range, return 0
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(0));
