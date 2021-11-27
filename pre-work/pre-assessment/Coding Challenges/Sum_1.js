console.clear();

console.log("TITLE: Sum_1\n");

console.log("DESCRIPTION: Write a functions that takes in an array and sums it.\n");

console.log("SCRIPT:\n");

function arraySum (array) //returns an array input
{
  let sum = 0;
  if (array.length === 0)
  {
    sum = 0; //Sum is equal to 0 if input is empty
  };
  for (i = 0; i < array.length; i++) //iterate sum over the array's elements
  {
    sum += array[i];
  }
  return sum;
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
    console.log(`\nYour numbers are: ${numberArgs}`);
    
    let sumArgs = arraySum(numberArgs); //Run function on the array of numbers
    
    console.log(`Sum of the array elements: ${sumArgs}`);

    console.log("\nTime Elapsed:"); 
    console.timeEnd(); //Ends timer
  }
);

