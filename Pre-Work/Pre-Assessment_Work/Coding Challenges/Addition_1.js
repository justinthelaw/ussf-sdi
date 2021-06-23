console.clear()

console.log("TITLE: Addition_1\n")

console.log("DESCRIPTION: Write a function that takes in two numbers and returns their sum.\n")

console.log("SCRIPT:\n")

var mathifyIt = 
{
  "+": function (x,y) {return x + y},
  "-": function (x,y) {return x - y},
  "*": function (x,y) {return x * y},
  "/": function (x,y) {return x / y},
  "**": function (x,y) {return x ** y},
  "%": function (x,y) {return x % y} 
} //turns strings input by the user into operators

