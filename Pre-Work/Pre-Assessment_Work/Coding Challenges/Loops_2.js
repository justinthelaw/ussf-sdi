console.clear();

console.log("TITLE: Loops_2\n")

console.log("DESCRIPTION: Write a function that performs a for loop that removes all vowels from a user inputted string.\n");

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
    
    console.log("For-loop, prints every character of the string except for vowels.");
    for (index = 0; index <= stringMaxIndex; index++)
    {
      let character = userString[index]
      if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u")
      {
        continue;
      }
      console.log(character);
    };

    console.log("\nTime Elapsed:");
    console.timeEnd(); //Ends timer
  }
);