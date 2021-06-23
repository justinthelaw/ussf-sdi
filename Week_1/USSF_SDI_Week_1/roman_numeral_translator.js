var romanToInt = function(s) {
  // Declare variables
  // Turn input string to array
  var romanArray = s.split('');
  // Iterate over the array
  for (var i = 0; i < romanArray.length; i++){
    // If statement to identify value of letter
    if (romanArray[i] === 'I'){
      romanArray[i] = 1;
      continue;
    } else if (romanArray[i] === 'V') {
      romanArray[i] = 5;
      continue;
    } else if (romanArray[i] === 'X'){
      romanArray[i] = 10;
      continue;
    } else if (romanArray[i] === 'L'){
      romanArray[i] = 50;
      continue;
    } else if (romanArray[i] === 'C'){
      romanArray[i] = 100;
      continue;
    } else if (romanArray[i] === 'D'){
      romanArray[i] = 500;
      continue;
    } else if (romanArray[i] === 'M'){
      romanArray[i] = 1000;
    }
  }
  // If statement for I, romanArray, C...
  var k = 1;
  for (let j = 0; j < romanArray.length - 1; j++){

    if (romanArray[j] === 1 && (romanArray[k] === 5 || romanArray[k] === 10)){
      romanArray[j] = -1;

    } else if (romanArray[j] === 10 && (romanArray[k] === 50 || romanArray[k] === 100)){
      romanArray[j] = -10;

    } else if (romanArray[j] === 100 && (romanArray[k] === 500 || romanArray[k] === 1000)){
      romanArray[j] = -100;
    }
    k++;
  }
  var sum = romanArray.reduce(function(a, b){
      return a + b;
  }, 0);
    //Add and return number value
  return sum
};
console.log(romanToInt("MCMXCIV"))