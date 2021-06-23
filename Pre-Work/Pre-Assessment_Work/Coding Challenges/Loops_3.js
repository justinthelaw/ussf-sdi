console.clear();

console.log("TITLE: Loops_3\n")

console.log("DESCRIPTION: Write a function that performs a for-in loop that logs all the keys and all the values in an object.\n");

console.log("SCRIPT:\n");

console.log("Target Object:");

let targetObject = {Name : "Justin", Profession : "Developmental Engineer", Hobby : "Coding", Food : "Pizza"};
console.table(targetObject);

console.log("\nKeys in the object:");
for (key in targetObject)
{
  console.log(key);
};

console.log("\nValues in the object:");
for (key in targetObject)
{
  console.log(targetObject[key]);
};

console.log("\nTime Elapsed:");
console.timeEnd(); //Ends timer