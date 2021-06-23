console.clear();

console.log("TITLE: Arrays_2\n");

console.log("DESCRIPTION: Given an array, write a function that takes in index 1, index 2, replacement, and new element, and returns the element at the given index 1, replaces the element at the given index 1 with a new given element, adds an element at the given index 2, and also adds a new given element at the end and front of the array. A splice of the entire array is given based on the given indices.\n");

console.log("SCRIPT:\n");

console.log("Given array:");
var array = ["Justin", "Likes", "To", "Code", 25, "$%&", 19.96, ":)"]; //given array for user to select elements from

function arrayReplace (array, index, replacement) //Replaces element at given index with a new given element
{
  return array[index] = replacement
};

console.table(array) ; 
//displays array to user in table format

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["Index_1", "Index_2", "Replacement", "Element_Back", "Element_Front", "Element_Middle"], //Input

  function (err, result) //Function that displays results
  {
    console.log("\nElement at Index " + result.Index_1 + ": " + array[result.Index_1] + "\nReplacement at Index " + result.Index_1 + ": " + result.Replacement + "\nNew Back Element: " + result.Element_Back + "\nNew Front Element: " + result.Element_Front); //Logs element

    console.log("\nNew Array:");
    arrayReplace(array, result.Index, result.Replacement); //Replaces element at the given index
    array.splice(result.Index_2, 0, result.Element_Middle); //Adds new element at the given index
    array.push(result.Element_Back); //Adds new element to back of array
    array.unshift(result.Element_Front); //Adds new element to front of array
    console.table(array) //Logs new array

    console.log("\nNew Array Splice:");
        console.log(array.slice(result.Index_1, result.Index_2)); //Logs new array slice

    console.log("\nTime Elapsed:") ;
    console.timeEnd(); //Ends timer
  }
);