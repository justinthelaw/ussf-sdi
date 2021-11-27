console.clear();

console.log("TITLE: Strings_1\n");

console.log("DESCRIPTION: Write a function that takes in a string and a number and returns the character within the string at the given number (index) as well as the total string length and a table of the string's characters and their indices.\n");

console.log("SCRIPT:\n");

function returnACharacter (string, index) //returns a chracter at a given index
{
  return string[index]
};

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["String","Number"], //String input and Number (index) input

  function (err, result) //Function that displays results
  { 
    console.log //Logs results to the console
    (
      "\nString: " + result.String + "\n" + "String Length: " + result.String.length + "\n" +
      "Index: " + result.Number + "\n" +
        "Character at Index " + result.Number + ": " + returnACharacter(result.String, result.Number) + "\n"
    );
    console.log("Cheat Sheet:");
    console.table (Array.from(result.String));

    console.log("\nTime Elapsed:");
    console.timeEnd(); //Ends timer
  }
);