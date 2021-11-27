console.clear();

console.log("TITLE: Loops_5\n")

console.log("DESCRIPTION: Write a loop that presents all possible combinations betweem an array of objects and an object of arrays.\n");

console.log("SCRIPT:\n");

console.log("Target Array:");

let arrayOfObjects = 
[
  {"a" : 1, "b" : 2, "c" : 3},
  {"d" : 4, "e" : 5, "f" : 6},
  {"g" : 7, "h" : 8, "i" : 9}
];
console.log(arrayOfObjects);

console.log("\nTarget Object:");

let objectOfArrays = 
{
  "set1" : ["alpha", "bravo", "charlie",],
  "set2" : ["delta", "echo", "foxtrot"],
  "set3" : ["gamma", "hotel", "india"]
};
console.log(objectOfArrays);

console.log("\nAll possible combinations:");

for (i = 0; i < arrayOfObjects.length; i++) //Look into each object in the array
{
  let objectsInArray = arrayOfObjects[i];
  for (letters in objectsInArray) //Look at the values in each object
  {
    for (sets in objectOfArrays) //Look into each array in the object
    {
      console.log(letters + objectsInArray[letters] + " - "); //Log the key and values of the objects in the array
      console.log(objectOfArrays[sets]); //Log the arrays in the object
    };
  };  

};
