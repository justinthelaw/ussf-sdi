console.clear();

console.log("TITLE: Operators_1\n")

console.log("DESCRIPTION: Write a function that takes in two numbers and an operator and returns the result of the operation on those two numbers.\n");

console.log("SCRIPT:\n");

console.table([["Operator Symbol","Operation"], ["+", "x add y"],["-", "x subtract y"], ["*", "x multiply by y"],["**", "x to exponent y"],["/", "x divided by y"],["%", "x modulo y"], ["+=", "x increment y"],["-=", "x decrement y"], ["*=", "x multiplier y"], ["/=", "x divider y"], ["<", "x less than y"], [">", "x greater than y"], [">=", "x greater than or equal to y"], ["<=", "x less than or equal to y"]]);

var mathifyIt = 
{
  "+": function (x,y) {return x + y},
  "-": function (x,y) {return x - y},
  "*": function (x,y) {return x * y},
  "**": function (x,y) {return x ** y},
  "/": function (x,y) {return x / y},
  "%": function (x,y) {return x % y},
  "+=": function (x,y) {return x += y},
  "-=": function (x,y) {return x -= y},
  "*=": function (x,y) {return x *= y},
  "/=": function (x,y) {return x /= y},"<": function (x,y) {return x < y},
  ">": function (x,y) {return x > y},
  "<=": function (x,y) {return x <= y},">=": function (x,y) {return x >= y}
}; //turns strings input by the user into operators

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["Number_x","Number_y", "Operator"], //Numbers and operator input

  function (err, result) //Function that displays results
  {
    
    console.log //Logs results to the console
    (
     "Result: " + result.Number_x + " " + result.Operator + " " + result.Number_y + " = " +
      mathifyIt[result.Operator](result.Number_x, result.Number_y)
    );
    console.log("\nTime Elapsed:");
    console.timeEnd(); //Ends timer
  }
);