//Given an integer, transform it into a base 2 number and count the times "1" occurs in the bunary number

var countBits = function (n) {
  let bitArr = n.toString(2).split("");
  let count = 0;
  for (let i = 0; i < bitArr.length; i++) {
    if (bitArr[i] == 1) {
      count++;
    }
  }
  return count;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));
