console.clear();

console.log("TITLE: Strings_2\n");

console.log("DESCRIPTION: Write a function that takes in a string a starting index, and ending index, and outputs the substring within the input bounds. Also uses indexOf method as a comparison to the user-input index and the index of the output substring. Generates final output using template literal instead of concatanate.\n");

console.log("SCRIPT:\n");

function returnASubstring (string, start, end) //returns a chracter at a given index
{
  return string.substring(start, end)
};

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["String","Start", "End"], //String input and Number (index) input

  function (err, result) //Function that displays results
  { 
    var resultString = returnASubstring(result.String, result.Start, result.End);

    console.log //Logs results to the console
    (
      `\nString: ${result.String} \nString Length: ${result.String.length} \nStart: ${result.Start} \nEnd: ${result.End} \n\nSubstring: ${resultString} \nSubstring Start Index: ${result.String.indexOf(resultString)}`
    );

    console.log("\nTime Elapsed:") ;
    console.timeEnd(); //Ends timer
  }
);