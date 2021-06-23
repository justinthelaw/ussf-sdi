console.clear();

console.log("TITLE: Numbers_1\n");

console.log("DESCRIPTION: Write a function that adds 2 to any given number.\n");

console.log("SCRIPT:\n");

function addsTwo (num) //Returns a number + 2
{
   return num + 2
};

var prompt = require("prompt") ;//Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["Number"], //Number input

  function (err, result) //Function that displays results
  {
    var actualNum = parseFloat(result.Number); //Ensures input converts to floating integer

    console.log //Logs results to the console
    (
      "Number: " + actualNum + "\n" + actualNum + " + 2 = " + addsTwo(actualNum)
    );
    console.log("\nTime Elapsed:"); 
    console.timeEnd(); //Ends timer
  }
);