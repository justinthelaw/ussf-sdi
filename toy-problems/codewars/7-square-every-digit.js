//Square every digit in an integer and return the result as a number

function squareDigits(num) {
  let numArr = num.toString().split("");
  let resultArr = [];
  for (let i = 0; i < numArr.length; i++) {
    let acc = numArr[i] ** 2;
    resultArr.push(acc);
  }
  let result = parseInt(resultArr.join(""));
  return result;
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
