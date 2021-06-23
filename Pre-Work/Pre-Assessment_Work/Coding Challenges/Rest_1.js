console.clear();

console.log("TITLE: Rest_1\n");

console.log("DESCRIPTION: Write a function using the rest operator to multiply any number of arguments together.\n");

console.log("SCRIPT:\n");

console.log("Use commas to delinate between array elements. Ex: 1,2,3,4\n");

function multiplyIt (...numberArgs) //Rest operator allows for undetermined amount of int/float arguments
{
  if (numberArgs.length === 0) //Lack of arguments returns 0
  {
    return 0;
  };

  return numberArgs.reduce //Performs the function over each number in the argument list
  (
    (previous, current) =>
    {
      return previous * current; //multiplies the previous number with the current argument
    }
  );

};

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["Numbers"], //User inputs as many number arguments as they would like

  function (err, result) //Function that displays results
  {
    let stringArgs = result.Numbers.split(",") //Convert string to array of strings
    let numberArgs = []
    for (i = 0; i < stringArgs.length; i++) //Convert strings to numbers
    {
      numberArgs.push(parseInt(stringArgs[i]));
    }
    console.log(`Your numbers are: ${numberArgs}`);
    
    let product = multiplyIt(...numberArgs); //Run function on the array of numbers
    
    console.log(`The product of your numbers is: ${product}`);

    console.log("\nTime Elapsed:"); 
    console.timeEnd(); //Ends timer
  }
);