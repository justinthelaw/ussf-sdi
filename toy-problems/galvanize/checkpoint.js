console.clear();

//Question 1 on Scopes - What will result1 log?
//var x = 10; //This was a trick
function outer () { var x = 20; function inner () {return x;} return inner();}
var result1 = outer();
console.log(result1);

//Question 2 on Recursion - create a function to determine if a number is odd using recursion.
const isOdd = (n) => {
  if (n === 1) {
    return true;
  } else if (n < 0) {
    n += 2;
    return isOdd(n);
  } else if (n > 1) {
    n -= 2;
    return isOdd(n)
  } else {
    return false
  }
}
console.log(isOdd(17));
console.log(isOdd(30));
console.log(isOdd(0));
console.log(isOdd(-5));
console.log(isOdd(-10));

//Question 3 - generate a function that multiplies each element in the array by an input number
const multiplyNumbers = (arr, num) => {
  return arr.map((element) => element * num);
}
console.log(multiplyNumbers([1, 2, 3], 5));

//Question 4 - generate a function that doubles the characters in a string of characters
const doubleLetters = (string) => {
  return string.split("").map((element) => element + element).join("");
}
console.log(doubleLetters('abcd'));

//Question 5 - generate a function that takes an array of numbers and removes even numbers, multiples the results by 10, and multiply all the rmaining numbers together into a single result
let numbers = [1, 2, 3, 4, 5, 6];
let result = numbers.filter(element => element % 2 !== 0).map((element) => element * 10).reduce((a, b) => (a * b));
console.log(result);