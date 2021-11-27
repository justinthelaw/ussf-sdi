// A prime number is a whole number that has no other divisors other than itself and 1. Write a function that accepts a number and returns true if it's a prime number, false if it's not.

var primeTester = function (number) {
  if (number === 1) { return false }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if ((number / i).toString().indexOf(".") !== -1) {
      continue
    } else {
      return false
    }
  }
  return true
};

var primeSieve = function (begin, end) {
  let blob = []
  for (let i = begin; i <= end; i++) {
    if (primeTester(i)) {
      blob.push(i)
    } else {
      continue
    }
  }
  return blob
};

console.log('primeTester Tests');
console.log("should be true", primeTester(2));
console.log("should be false", primeTester(1));
console.log("should be true", primeTester(15485867));
console.log("should be false", primeTester(15485867 * 15485867));
console.log("should be true", primeTester(2971215073));
console.log("should be false", primeTester(2971215073 * 2971215073));
console.log("should be true", primeTester(70368760954879));
console.log("should be false", primeTester(70368760954879 - 1));

console.log('\nprimeSieve Tests');
console.log("should be nothing", primeSieve(20, 22));
console.log("should be 2", primeSieve(1, 2));
console.log("should be 2, 3, 5, 7, primeSieve(1, 10));
console.log("should be 23, 29", primeSieve(23, 29));
console.log("should be a few", primeSieve(2908, 3080));