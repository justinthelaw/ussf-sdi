// Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.

function findOdd(array) {
  let objectRepeat = {};

  for (let i = 0; i < array.length; i++) {
    if (objectRepeat[array[i]] === undefined) {
      objectRepeat[array[i]] = 1;
    } else {
      objectRepeat[array[i]]++;
    }
  }

  for (let key in objectRepeat) {
    if (objectRepeat[key] % 2 === 1) return parseInt(key);
  }
}

console.log(
  findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]),
  "should be 5"
);
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]), "should be -1");
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]), "should be 5");
console.log(findOdd([10]), "should be 10");
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]), "should be 10");
console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]), "should be 1");
