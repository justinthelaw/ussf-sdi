console.clear();

console.log("TITLE: Parity_1\n");

console.log("DESCRIPTION: Write a functions that takes in an array of numbers and return an array of only odds or only evens. User types/chooses odd or even in the prompt.\n");

console.log("SCRIPT:\n");

let givenArray = [1, 400, 5678, 8, 999999, 20, 343] //Array to be passed through the prompt and functions
console.log(`The given array: ${givenArray}\n This given array can be changed in Line 9 of the script.`);

function oddOnly (arrayInput)
{
  let oddArray = []
  
  if (arrayInput.length === 0)
  {
    oddArray = []; //Returns an empty array if input array is empty
  }

  for (i = 0; i < arrayInput.length; i++) //Iterate over the input array
  {
    if (arrayInput[i] % 2 === 1)
    {
      oddArray.push(arrayInput[i]);
    }
  }
  console.log(`\nArray of odd numbers from the input array: ${oddArray}`);
}

function evenOnly (arrayInput)
{
  let evenArray = []
  
  if (arrayInput.length === 0)
  {
    evenArray = []; //Returns an empty array if input array is empty
  }

  for (i = 0; i < arrayInput.length; i++) //Iterate over the input array
  {
    if (arrayInput[i] % 2 === 0)
    {
      evenArray.push(arrayInput[i]);
    }
  }
  console.log(`\nArray of even numbers from the input array: ${evenArray}`);
}

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["Odd_or_Even"], //Input

  function (err, result) //Function that displays results
  {
    let userInput = result.Odd_or_Even.toLowerCase() //Removes case-sensitivity

    if (userInput === "odd")
    {
      console.log(oddOnly(givenArray));
    };
    if (userInput === "even")
    {
      console.log(evenOnly(givenArray));
    };

    console.log("\nTime Elapsed:"); 
    console.timeEnd(); //Ends timer
  }
);