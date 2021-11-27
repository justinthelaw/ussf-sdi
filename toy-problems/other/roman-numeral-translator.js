// Given a roman numeral as input, write a function that converts the roman numeral to a number and outputs it.

// Ex: translateRomanNumeral("LX") // 60

// When a smaller numeral appears before a larger one, it becomes a subtractive operation. You can assume only one smaller numeral may appear in front of larger one.

// Ex: translateRomanNumeral("IV") // 4

// You should return null if the input is not a string. You can expect all non-empty string inputs to be valid roman numerals.

//Inefficient method
var translateRomanNumeralv1 = function (s) {
  if (typeof s !== 'string') return null

  var romanArray = s.split('');
  // Iterate over the array
  for (var i = 0; i < romanArray.length; i++) {
    // If statement to identify value of letter
    if (romanArray[i] === 'I') {
      romanArray[i] = 1;
      continue;
    } else if (romanArray[i] === 'V') {
      romanArray[i] = 5;
      continue;
    } else if (romanArray[i] === 'X') {
      romanArray[i] = 10;
      continue;
    } else if (romanArray[i] === 'L') {
      romanArray[i] = 50;
      continue;
    } else if (romanArray[i] === 'C') {
      romanArray[i] = 100;
      continue;
    } else if (romanArray[i] === 'D') {
      romanArray[i] = 500;
      continue;
    } else if (romanArray[i] === 'M') {
      romanArray[i] = 1000;
    }
  }
  // If statement for I, romanArray, C...
  var k = 1;
  for (let j = 0; j < romanArray.length - 1; j++) {

    if (romanArray[j] === 1 && (romanArray[k] === 5 || romanArray[k] === 10)) {
      romanArray[j] = -1;

    } else if (romanArray[j] === 10 && (romanArray[k] === 50 || romanArray[k] === 100)) {
      romanArray[j] = -10;

    } else if (romanArray[j] === 100 && (romanArray[k] === 500 || romanArray[k] === 1000)) {
      romanArray[j] = -100;
    }
    k++;
  }
  var sum = romanArray.reduce(function (a, b) {
    return a + b;
  }, 0);
  //Add and return number value
  return sum
};

//Efficient method
const translateRomanNumeralv2 = (s) => {
  if (!s) {
    return 0
  } else if (typeof s !== 'string') {
    return null
  }
  let result = 0
  const n = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  for (let i = 0; i < s.length; i++) {
    let current = n[s[i]]
    let next = n[s[i + 1]]
    if (next && current < next) {
      result -= current
    } else {
      result += current
    }
  }
  return result
}

console.log('Inefficient method, O(3n)')
console.time('v1')
console.log(translateRomanNumeralv1("IV"))
console.log(translateRomanNumeralv1("V"))
console.log(translateRomanNumeralv1("MCMXCIV"))
console.timeEnd('v1')

console.log('More efficient method, O(n)')
console.time('v2')
console.log(translateRomanNumeralv2("IV"))
console.log(translateRomanNumeralv2("V"))
console.log(translateRomanNumeralv2("MCMXCIV"))
console.timeEnd('v2')