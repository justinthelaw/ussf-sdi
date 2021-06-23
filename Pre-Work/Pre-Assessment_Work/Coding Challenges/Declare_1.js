console.clear();

console.log("TITLE: Declare_1\n");

console.log("DESCRIPTION: Demonstration of the difference between the declarations in JavaScript. For this coding challenge, the try and catch method is used when a block of code is expected to throw an error. Instead, the expected error will be manually shortened and logged to console and the script will continue to run.\n");

console.log("SCRIPT:\n");

console.log("Calling a variable before it is declared and initialized:\n");

console.log("Using var:");
console.log(var_1);
var var_1 = 1;
console.log("Does not throw an error.\n")

console.log("Using let:");
try 
{
  console.log(let_1);
  let let_1 = 1;
} 
catch (error) 
{
  console.log("Throws reference error.");
  console.error();
  };

console.log("Using const:");
try
{
  console.log(const_1);
  const const_1 = 1;
}
catch (error) 
{
  console.log("Throws reference error.");
  console.error();
};