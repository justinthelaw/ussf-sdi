console.clear();

console.log("TITLE: Not_1\n");

console.log("DESCRIPTION: Write a function that takes in a boolean and returns the opposite.\n");

console.log("SCRIPT:\n");

function opposite(boolean) //returns the opposite of a given boolean value
{
  console.log(!boolean)
};

console.log("The opposite of true is:");
opposite(true);

console.log("The opposite of false is:");
opposite(false);

console.log("\nTime Elapsed:"); 
console.timeEnd(); //Ends timer