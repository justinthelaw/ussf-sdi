console.clear();

console.log("TITLE: Loops_4\n")

console.log("DESCRIPTION: Write a loop that pulls out all the values inside an array with nested arrays. Write a loop that pulls out all the values inside an object with nested objects.\n");

console.log("SCRIPT:\n");

console.log("Target Array:");

let arrayOfArrays = 
[
  [1, ["a", "b", "c"], 2, 3],
  [4, 5, 6],
  [7, 8, 9, ["x", "y", "z"]]
];
console.log(arrayOfArrays);

console.log("\nValues in the array:");

for (i = 0; i < arrayOfArrays.length; i++) //Look into each element of the array
{
  for (j = 0; j < arrayOfArrays[i].length; j++) //Look into each element's elements
  {
    if (Array.isArray(arrayOfArrays[i][j]) === false)
    {
      console.log(arrayOfArrays[i][j]); //Log elements that are not arrays
    };

    for (k = 0; k < arrayOfArrays[i][j].length; k++) //Look into each element's element's elements
    {
      console.log(arrayOfArrays[i][j][k]); //Log elements
    }
  }
};

console.log("\nTarget Object:");

let objectOfObjects = 
{
  "alpha" : {"a" : 1, "b" : 2, "c" : 3},
  "bravo" : {"d" : 4, "e" : 5, "f" : 6},
  "charlie" : {"g" : 7, "h" : 8, "i" : 9}
};
console.log(objectOfObjects);

console.log("\nValues in the object:");

for (symbol in objectOfObjects) //Loop over outer object for inner objects
{
  console.log(symbol); //Logs keys of outer object
  
  let innerObject = objectOfObjects[symbol]; //Define nexted objects
  for (letter in innerObject) //Loop over values in nested object
  {
    console.log(letter + " : " + innerObject[letter]); //Logs values
  };
};

console.log("\nTime Elapsed:");
console.timeEnd(); //Ends timer