console.clear();

console.log("TITLE: Operators_1\n");

console.log("DESCRIPTION: Write a function that takes in two numbers and returns their sum.\n");

console.log("SCRIPT:\n");

console.table([["Operator Symbol","Operation"], ["Math.abs()", "absolute value"],["Math.ceil()", "round up"], ["Math.floor()", "round down"],["Number.parseInt", "convert string to integer"],["Number.parseFloat", "convert string to floating value"],["Math.random()", "Generates number between 1 and 100"]]);

var mathifyIt = 
{
  "Math.abs(x)": function (x) {return Math.abs(x)},
  "Math.ceil(x)": function (x) {return Math.ceil(x)},
  "Math.floor(x)": function (x) {return Math.floor(x)},
  "Number.parseInt(x)": function (x) {return Number.parseInt(x)},
  "Math.parseFloat(x)": function (x) {return Math.abs(x)},
  "Math.random()": function (x) {return Math.ceil(Math.random()*(100-1)+1)},
}; //turns strings input by the user into operators

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["Operator", "Number_x"], //Numbers and operator input

  function (err, result) //Function that displays results
  {
    
    console.log //Logs results to the console
    (
     "Result: " + result.Operator + ", where x is " + result.Number_x + " = " +
      mathifyIt[result.Operator](result.Number_x)
    );
    console.log("\nTime Elapsed:"); 
    console.timeEnd(); //Ends timer
  }
);