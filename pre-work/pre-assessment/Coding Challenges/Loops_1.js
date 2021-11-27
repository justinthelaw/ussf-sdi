console.clear();

console.log("TITLE: Loops_1\n")

console.log("DESCRIPTION: Write a function that performs a while loop over a user inputted string from start to finish, and performs a for loop from finish to start.\n");

console.log("SCRIPT:\n");

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["String"], //String or Array input

  function (err, result) //Function that displays results
  {
    let userString = result.String;
    let stringMaxIndex = userString.length - 1;
    let index = 0;

    console.log(`The length of the string - "${userString}" - is ${userString.length}.\n`);
    
    console.log("While-loop, prints characters of string from start to finish.");
    while (index <= stringMaxIndex)
    {
      console.log(userString[index]);
      index++;
    };
    
    console.log("For-loop, prints every other character of the string from finish to start.");
    for (index = stringMaxIndex; index >= 0; index -= 2)
    {
      console.log(userString[index]);
    };

    console.log("\nTime Elapsed:");
    console.timeEnd(); //Ends timer
  }
);