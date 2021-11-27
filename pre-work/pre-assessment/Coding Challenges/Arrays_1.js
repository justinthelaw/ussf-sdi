console.clear();

console.log("TITLE: Arrays_1\n");

console.log("DESCRIPTION: Write a function that takes in 2 sets of array elements, and returns a concatenated array and also returns the elements as a string with dashes between elements.\n");

console.log("SCRIPT:\n");

function arrayOutput (array) //returns an array input
{
  return array
};

console.log("Use commas to delinate between array elements. Ex: 1,2,3,4\n");

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["Array", "Additional_Array"], //Array inputs

  function (err, result) //Function that displays results
  {
    var arraySplit1 = result.Array.split(","); //turns string into array using split
    var arraySplit2 = result.Additional_Array.split(","); //turns string into array using split
    
    console.log("\n" + arrayOutput(arraySplit1) + "\nArray Length: " + arraySplit1.length); //Logs new array and length of array
    console.table(arrayOutput(arraySplit1)); //Logs results to the console as a table
    
    console.log("\nNew Array:");
    var resultArray = arraySplit1.concat(arraySplit2);
    console.table(resultArray); //Logs array with new elements taken from another array

    console.log("\nStringify: " + resultArray.join("-")); //Logs the new array as a string of elements with dashes b/w each element

    console.log("\nTime Elapsed:"); 
    console.timeEnd(); //Ends timer
  }
);