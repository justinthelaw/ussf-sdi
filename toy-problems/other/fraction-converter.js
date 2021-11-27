//Write a function that takes a number as its argument and returns a string that represents that number's simplified fraction.
//Example: toFraction(0.5) === '1/2'

//Whole numbers and mixed fractions should be returned as irregular fractions
//Example: toFraction(3.0) === '3/1'
//Example: toFraction(2.5) === '5/2'

function gcfFinder(numerator, denominator) {
  if (denominator === 0) return numerator;
  else return gcfFinder(denominator, numerator % denominator);
}

const toFraction = function (number) {
  let numStr = number.toString();
  let decPlace = numStr.indexOf(".");
  let decMover = 10 ** numStr.substring(decPlace + 1).length;

  if (decPlace !== -1) {
    let gcf = gcfFinder(number * decMover, decMover);
    return (number * decMover) / gcf + "/" + decMover / gcf;
  } else {
    return numStr + "/1";
  }
};

console.log("Should return 1/1: ", toFraction(1.0));
console.log("Should return 1/4: ", toFraction(0.25));
console.log("Should return 22/25: ", toFraction(0.88));
console.log("Should return 7/4: ", toFraction(1.75));
console.log("Should return 0/1: ", toFraction(0.0));
console.log("Should return 82/1: ", toFraction(82));
console.log("Should return 207/250: ", toFraction(0.828));
